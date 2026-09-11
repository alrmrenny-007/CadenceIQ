/* artist.js — renders a single artist profile from ?id= in the URL */

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

async function renderArtistPage() {
  const id = qs("id");
  const all = await fetchArtists();
  const combined = [...all, ...RISING_ARTISTS];
  const artist = combined.find((a) => a.id === id);

  const root = document.getElementById("artist-root");

  if (!artist) {
    root.innerHTML = `
      <div class="not-found">
        <h1 style="font-family:var(--font-display)">Artist not found</h1>
        <p style="color:var(--text-muted)">That profile doesn't exist yet.</p>
        <a class="btn btn-primary" href="index.html">Back home</a>
      </div>`;
    return;
  }

  document.title = `${artist.name} — CadenceIQ`;
  document.documentElement.style.setProperty("--hero-tint", hexToRgba(artist.heroColor, 0.16));

  root.innerHTML = `
    <section class="artist-hero" style="--hero-tint:${hexToRgba(artist.heroColor, 0.16)}">
      <div class="container">
        <a class="back-link" href="index.html">&larr; All artists</a>
        <div class="artist-hero-grid">
          <div class="avatar" style="--card-accent:${artist.heroColor}">${initials(artist.name)}</div>
          <div>
            <h1>${artist.name}</h1>
            <p class="role">${artist.tagline}</p>
            <div class="meta-chips">
              <span class="meta-chip">${artist.genre}</span>
              <span class="meta-chip">${artist.label}</span>
              ${artist.status === "rising" ? '<span class="meta-chip" style="color:var(--accent-2);border-color:var(--accent-2)">Rising artist</span>' : ""}
            </div>
            ${artist.newRelease ? `<p style="color:var(--text-muted)">Newest release: <strong style="color:var(--text)">${artist.newRelease.title}</strong> (${artist.newRelease.year})</p>` : ""}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-col">
        <div>
          <h2 style="font-family:var(--font-display);margin-top:0;">Biography</h2>
          <p class="bio-text">${artist.bio}</p>

          <h2 style="font-family:var(--font-display);margin-top:40px;">Discography</h2>
          <div id="artist-tracks"></div>
        </div>

        <div>
          ${
            artist.awards && artist.awards.length
              ? `<div class="side-card">
                  <h4>Awards</h4>
                  ${artist.awards
                    .map((aw) => `<div class="award-item"><span>${aw.name}${aw.work ? " — " + aw.work : ""}</span><span class="yr">${aw.year}</span></div>`)
                    .join("")}
                </div>`
              : ""
          }
          <div class="side-card">
            <h4>Record label</h4>
            <p style="margin:0;color:var(--text-muted)">${artist.label}</p>
          </div>
          ${
            artist.playlistSearch
              ? `<div class="side-card">
                  <h4>Playlist</h4>
                  <a class="btn btn-primary btn-sm" href="${spotifySearchUrl(artist.playlistSearch)}" target="_blank" rel="noopener">Open playlist</a>
                </div>`
              : ""
          }
        </div>
      </div>
    </section>

    <div class="player-overlay" id="player-overlay">
      <div class="player-modal">
        <div class="player-modal-head">
          <h4 id="player-title">Now playing</h4>
          <button class="close-btn" id="player-close">&times;</button>
        </div>
        <div class="player-options" id="player-body"></div>
      </div>
    </div>
  `;

  document.getElementById("artist-tracks").innerHTML = artist.songs.map((s) => trackRowHTML(s, artist)).join("");

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

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255, g = (bigint >> 8) & 255, b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

document.addEventListener("DOMContentLoaded", renderArtistPage);
