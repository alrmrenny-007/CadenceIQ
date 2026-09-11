/* main.js — homepage rendering + shared player modal */

function initials(name) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function ytSearchUrl(q) { return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q); }
function spotifySearchUrl(q) { return "https://open.spotify.com/search/" + encodeURIComponent(q); }

/* ---------- shared "play" modal ----------
   If a song has a real youtubeId / spotifyId (once you've wired up
   the APIs — see README.md) it embeds the player directly. Until
   then it offers one-tap search links so nothing is ever a dead end. */
function openPlayer(song, artistName) {
  const overlay = document.getElementById("player-overlay");
  const title = document.getElementById("player-title");
  const body = document.getElementById("player-body");
  title.textContent = `${song.title} — ${artistName}`;

  let html = "";

  if (song.youtubeId) {
    html += `<div style="aspect-ratio:16/9;border-radius:14px;overflow:hidden;margin-bottom:14px;">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${song.youtubeId}"
        title="YouTube player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>`;
  }
  if (song.spotifyId) {
    html += `<div style="border-radius:14px;overflow:hidden;">
      <iframe style="border-radius:14px" src="https://open.spotify.com/embed/track/${song.spotifyId}"
        width="100%" height="152" frameborder="0" allow="encrypted-media"></iframe>
    </div>`;
  }
  if (!song.youtubeId && !song.spotifyId) {
    html = `
      <a class="player-option" href="${ytSearchUrl(song.youtubeSearch || song.title + ' ' + artistName)}" target="_blank" rel="noopener">
        <span><strong>Watch on YouTube</strong><span>Opens the official video search</span></span>
        <span>&rarr;</span>
      </a>
      <a class="player-option" href="${spotifySearchUrl(song.spotifySearch || song.title + ' ' + artistName)}" target="_blank" rel="noopener">
        <span><strong>Play on Spotify</strong><span>Opens Spotify search</span></span>
        <span>&rarr;</span>
      </a>
      <p style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">
        Add real video/track IDs in data.js to embed playback directly here — see README.md.
      </p>`;
  }

  body.innerHTML = html;
  overlay.classList.add("open");
}

function closePlayer() {
  const overlay = document.getElementById("player-overlay");
  overlay.classList.remove("open");
  document.getElementById("player-body").innerHTML = "";
}

/* ---------- card builders ---------- */
function artistCardHTML(a) {
  return `
    <a class="artist-card" href="artist.html?id=${a.id}" style="--card-accent:${a.heroColor}">
      <div class="avatar" style="--card-accent:${a.heroColor}">${initials(a.name)}</div>
      <h3>${a.name}</h3>
      <p class="role">${a.tagline}</p>
      <div class="badge-row">
        <span class="badge">${a.genre}</span>
        ${a.awards && a.awards.length ? `<span class="badge award">${a.awards.length} award${a.awards.length > 1 ? "s" : ""}</span>` : ""}
      </div>
    </a>`;
}

function trackRowHTML(song, artist) {
  return `
    <div class="track-row" data-song='${JSON.stringify(song).replace(/'/g, "&apos;")}' data-artist="${artist.name}">
      <div class="play-dot">▶</div>
      <div class="track-meta">
        <h4>${song.title}</h4>
        <span>${artist.name}${song.album ? " · " + song.album : ""}${song.year ? " · " + song.year : ""}</span>
      </div>
    </div>`;
}

function risingCardHTML(a) {
  return `
    <div class="rising-card" style="--card-accent:${a.heroColor}">
      <div class="avatar" style="--card-accent:${a.heroColor}">${initials(a.name)}</div>
      <h3>${a.name}</h3>
      <p class="role">${a.tagline} · ${a.label}</p>
      <p class="bio-snip">${a.bio}</p>
      <div class="actions">
        <a class="btn btn-primary btn-sm" href="${spotifySearchUrl(a.playlistSearch || a.name + " playlist")}" target="_blank" rel="noopener">Playlist</a>
        <a class="btn btn-ghost btn-sm" href="artist.html?id=${a.id}">Full bio</a>
      </div>
    </div>`;
}

/* ---------- render homepage ---------- */
async function renderHome() {
  const artists = (await fetchArtists()).filter((a) => a.status === "established");
  const rising = RISING_ARTISTS;

  // Hero marquee: artist names, duplicated for seamless loop
  const names = artists.map((a) => a.name);
  const rowText = (arr) => arr.map((n) => `<span>${n}</span>`).join("");
  document.getElementById("marquee-left").innerHTML = rowText([...names, ...names]);
  document.getElementById("marquee-right").innerHTML = rowText([...names].reverse().concat([...names].reverse()));

  // Best of the Best rail
  document.getElementById("best-rail").innerHTML = artists.map(artistCardHTML).join("");

  // New releases rail (one track per artist, their newest)
  const releases = artists.map((a) => ({
    artist: a,
    song: a.songs[0],
  }));
  document.getElementById("release-rail").innerHTML = releases
    .map((r) => trackRowHTML(r.song, r.artist))
    .join("");

  // Awards & labels grid
  document.getElementById("labels-grid").innerHTML = artists
    .map(
      (a) => `
      <div class="side-card">
        <h4 style="color:${a.heroColor}">${a.name}</h4>
        <p style="color:var(--text-muted);font-size:0.88rem;margin:0 0 12px;">${a.label}</p>
        ${(a.awards || [])
          .slice(0, 2)
          .map((aw) => `<div class="award-item"><span>${aw.name}${aw.work ? " — " + aw.work : ""}</span><span class="yr">${aw.year}</span></div>`)
          .join("")}
      </div>`
    )
    .join("");

  // Rising artists
  document.getElementById("rising-grid").innerHTML = rising.map(risingCardHTML).join("");

  // Delegate play-button clicks
  document.body.addEventListener("click", (e) => {
    const row = e.target.closest(".track-row");
    if (row) {
      const song = JSON.parse(row.dataset.song.replace(/&apos;/g, "'"));
      openPlayer(song, row.dataset.artist);
    }
  });

  document.getElementById("player-overlay").addEventListener("click", (e) => {
    if (e.target.id === "player-overlay") closePlayer();
  });
  document.getElementById("player-close").addEventListener("click", closePlayer);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("best-rail")) renderHome();
});
