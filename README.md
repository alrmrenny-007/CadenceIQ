# CadenceIQ — setup guide

Your site works right now with zero setup — open `index.html` and everything
runs on sample data, with working "Play" buttons that search YouTube/Spotify.
The steps below are only for when you want real embedded players and a live
database instead of the built-in sample content. All of this can be done from
a phone browser.

**What's included:** 2 Legends & Pioneers, 9 current-era artists across
Afrobeats/Alté-R&B/Amapiano, and 4 example "rising" artists grouped by genre
(Amapiano, Afrobeats, Afro-Gospel, Highlife Revival). Add, remove, or
recategorize any of them in `data.js` — see "Where to edit things" below.
There's also `artists.html` — a filterable directory of every artist — linked
from the nav on every page.

**About the hero background video:** it ships empty on purpose (see section 2
below) rather than with a guessed video ID, since a wrong or region-blocked ID
would silently show a black box instead of a video. Takes about 10 seconds to
add your own.

**Mobile nav:** below ~760px wide, the nav links collapse behind a hamburger
button (`nav.js` handles the open/close). Above that width they show as a
normal row, same as before.

## 1. Getting on the web with Render

Render hosts static sites (HTML/CSS/JS like this one) for free, but it
deploys from a GitHub (or GitLab) repo rather than a drag-and-drop upload —
so you'll need your project in a repo first. All doable from a phone:

1. **Get the code into GitHub.**
   - Easiest on mobile: install the **GitHub** app, or just use github.com in
     your browser. Create a new repository (e.g. `cadenceiq`).
   - Upload the project files: on the repo page, tap "Add file" → "Upload
     files", then select every file in this project folder. Commit.
2. **Connect Render.**
   - Go to https://render.com → sign up (you can sign in with GitHub, which
     saves a step) → "New" → "Static Site".
   - Pick the repo you just created and authorize Render to access it.
3. **Configure the build.**
   - Build Command: leave blank (there's nothing to build — it's plain
     HTML/CSS/JS).
   - Publish Directory: `.` (a single dot, meaning the repo root, since
     `index.html` sits at the top level).
4. Tap "Create Static Site". Render gives you a live URL like
   `https://cadenceiq.onrender.com` within a minute or two.
5. **Updating later:** any time you edit a file in the GitHub repo (even
   editing directly in the GitHub app/website), Render automatically
   redeploys the site with the change — no extra steps.

## 2. Hero background video (Fela, Wizkid, or anyone else)

The homepage hero can play a muted, looping video behind the headline — just
that section, not the whole site.

1. Open the video on YouTube (the app or the website).
2. Tap Share → Copy Link. You'll get something like
   `https://youtu.be/dQw4w9WgXcQ` or `...watch?v=dQw4w9WgXcQ`.
3. The video ID is the part after `youtu.be/` or `v=` — in that example,
   `dQw4w9WgXcQ`.
4. Open `data.js`, find the `HERO_VIDEO` block near the top, and paste it in:
   ```js
   const HERO_VIDEO = {
     youtubeId: "dQw4w9WgXcQ",
     credit: "Fela Kuti — Zombie (official)",
   };
   ```
5. Save and reload. Leave `youtubeId` as an empty string to go back to the
   plain marquee-only hero.

A couple of things worth knowing: mobile browsers generally only allow
autoplay when a video is muted (already set up for you), and some rights
holders disable embedding on specific uploads — if a chosen video doesn't
show, try a different upload of the same song.

## 3. YouTube — for embedding real videos on artist/song cards

You do **not** need an API key just to embed a video (the site already does
this automatically once you add an ID). You only need a key if you later want
the site to *search* YouTube automatically instead of you picking videos.

**To embed a specific video right now:**
1. Open the video on YouTube, tap Share → Copy Link.
2. The ID is the part after `watch?v=`, e.g. `dQw4w9WgXcQ`.
3. In `data.js`, add `youtubeId: "dQw4w9WgXcQ"` to that song's entry.

**If you want the YouTube Data API later** (for auto-search):
1. Go to https://console.cloud.google.com
2. Create a project → "APIs & Services" → "Library" → enable "YouTube Data API v3".
3. "Credentials" → "Create Credentials" → "API key". Copy it.
4. Restrict the key to YouTube Data API v3 only (Credentials → edit key → API restrictions).

## 4. Spotify — for embedding real tracks

Same idea — no key needed for embedding:
1. Open the track in the Spotify app → Share → Copy Link.
2. The ID is the part after `track/`, e.g. `3n3Ppam7vgaVa1iaRUc9Lp`.
3. In `data.js`, add `spotifyId: "3n3Ppam7vgaVa1iaRUc9Lp"` to that song.

**If you want the Spotify Web API later** (for search, top tracks, etc.):
1. Go to https://developer.spotify.com/dashboard and log in.
2. "Create app" → fill in any name/description → for the redirect URI you can
   put your Render URL (e.g. `https://cadenceiq.onrender.com`).
3. Copy the **Client ID** and **Client Secret** from the app settings.
4. Note: the Spotify Web API only gives 30-second previews (often unavailable)
   and requires a server-side token exchange — the embed-link approach above
   gives full playback with zero backend, so most sites like this stick with it.

## 5. Supabase — for a real, editable artist database

**This is already connected.** `supabase-client.js` has your project URL and
anon key filled in, `USE_SUPABASE` is set to `true`, and both HTML pages load
the Supabase library. The only thing left is creating (or updating) the table
— split into six short files so each one is easy to paste into Supabase's
SQL Editor on a phone:

1. Open your project at https://supabase.com/dashboard → **SQL Editor** →
   "New query".
2. Run these one at a time, in order — paste the whole file, hit **Run**,
   clear the editor, paste the next one:
   1. `seed-1-schema.sql` — creates the table + read policy
   2. `seed-2-legends.sql` — Fela Kuti, King Sunny Adé
   3. `seed-3-afrobeats-icons.sql` — Burna Boy, Wizkid, Davido, Rema, Ayra Starr
   4. `seed-4-alte-rnb.sql` — Tems, Omah Lay, Tiwa Savage
   5. `seed-5-amapiano.sql` — Asake
   6. `seed-6-rising.sql` — all 4 example rising artists
3. Reload the site — it's now reading live from Supabase instead of
   `data.js`. If Supabase is ever unreachable, the site automatically falls
   back to `data.js` so nothing breaks.

**If you ran the old single `seed.sql` before:** these six files replace it —
they're safe to run even if some rows already exist. The `on conflict (id)
do update` clause in each insert updates existing rows instead of
duplicating them, and `alter table ... add column if not exists` in the
schema file safely adds the `category` column used for grouping.

**To edit artists going forward:** use the Table Editor in Supabase (Table
Editor → `artists`), or open the relevant `seed-*.sql` file, change one
artist's values, and run just that one `insert ... values (...)` block. To
add a brand-new artist, copy a block from the closest-matching file, tweak
it, and run it.

A note on the anon key: it's meant to be public and safe to ship in
client-side code — that's what "anon public" means. Just make sure the RLS
policy stays read-only (`select`) so nobody can write to your table from the
browser.

## 6. Adding real artist photos

By default every artist shows as colored initials instead of a photo — that's
on purpose. I don't pull in photos of real, named people on my own, since
that touches on rights and likeness issues I stay away from. Adding one is a
one-line edit whenever you're ready:

1. Get a photo you have the right to use — options that are generally safe:
   an artist/label's own official press kit or EPK, a photo the artist or
   their label posted that you have permission to use, an image you took
   yourself, or a properly-licensed stock/Creative Commons photo with
   attribution where required. Avoid random Google Images results — many
   aren't licensed for reuse.
2. Upload it somewhere with a direct image URL — for example, host it inside
   your own GitHub repo (e.g. add an `images/` folder, then use a link like
   `https://raw.githubusercontent.com/you/cadenceiq/main/images/burna-boy.jpg`),
   or use any image host that gives you a direct `.jpg`/`.png`/`.webp` link.
3. In `data.js`, add an `image` field to that artist's object:
   ```js
   {
     id: "burna-boy",
     name: "Burna Boy",
     image: "https://raw.githubusercontent.com/you/cadenceiq/main/images/burna-boy.jpg",
     // ...rest of the fields stay the same
   }
   ```
4. Save and reload — that artist now shows the photo everywhere (homepage
   cards, the directory, and their profile page). Leave `image` out (or set
   it to an empty string) to keep the colored-initials look for any artist.

If you're using Supabase, add the URL to the `image` column for that row
instead (via the Table Editor, or by editing the matching block in
`seed-*.sql` and re-running it).

## Where to edit things

- **Artists, songs, categories, hero video:** `data.js` (or Supabase, once connected)
- **Colors, fonts, spacing:** `style.css` (all tokens at the top)
- **Homepage layout & rendering:** `index.html` + `main.js`
- **Artist profile layout & rendering:** `artist.html` + `artist.js`

### Adding a new artist or category

In `data.js`, copy an existing object in `ARTISTS` (for established/legend
acts) or `RISING_ARTISTS` (for upcoming acts), give it a unique `id`, and set
`status` to `"legend"`, `"established"`, or `"rising"`. The `category` field
is just a label used to group cards — use an existing one (e.g. "Afrobeats
Icons") or invent a new one; new categories show up automatically without
any other code changes. If you're using Supabase, add the row there instead
(or add it to `data.js` and re-run the matching block from `seed.sql`).
