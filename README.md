# CadenceIQ — setup guide

Your site works right now with zero setup — open `index.html` and everything
runs on sample data, with working "Play" buttons that search YouTube/Spotify.
The steps below are only for when you want real embedded players and a live
database instead of the built-in sample content. All of this can be done from
a phone browser.

## 1. Getting on the web first (so you can test on your phone)

Easiest free option: [Netlify Drop](https://app.netlify.com/drop) — open it
in your phone browser, upload the whole project folder, and it gives you a
live URL in seconds. GitHub Pages also works if you already use GitHub.

## 2. YouTube — for embedding real videos

You do **not** need an API key just to embed a video (the site already does
this automatically once you add an ID). You only need a key if you later want
the site to *search* YouTube automatically instead of you picking videos.

**To embed a specific video right now:**
1. Open the video on YouTube, tap Share → Copy Link.
2. The ID is the part after `watch?v=`, e.g. `dQw4w9WgXcQ`.
3. In `js/data.js`, add `youtubeId: "dQw4w9WgXcQ"` to that song's entry.

**If you want the YouTube Data API later** (for auto-search):
1. Go to https://console.cloud.google.com
2. Create a project → "APIs & Services" → "Library" → enable "YouTube Data API v3".
3. "Credentials" → "Create Credentials" → "API key". Copy it.
4. Restrict the key to YouTube Data API v3 only (Credentials → edit key → API restrictions).

## 3. Spotify — for embedding real tracks

Same idea — no key needed for embedding:
1. Open the track in the Spotify app → Share → Copy Link.
2. The ID is the part after `track/`, e.g. `3n3Ppam7vgaVa1iaRUc9Lp`.
3. In `js/data.js`, add `spotifyId: "3n3Ppam7vgaVa1iaRUc9Lp"` to that song.

**If you want the Spotify Web API later** (for search, top tracks, etc.):
1. Go to https://developer.spotify.com/dashboard and log in.
2. "Create app" → fill in any name/description → for the redirect URI you can
   put your Netlify URL.
3. Copy the **Client ID** and **Client Secret** from the app settings.
4. Note: the Spotify Web API only gives 30-second previews (often unavailable)
   and requires a server-side token exchange — the embed-link approach above
   gives full playback with zero backend, so most sites like this stick with it.

## 4. Supabase — for a real, editable artist database

1. Go to https://supabase.com → sign up (free tier is enough) → "New project".
2. Once it's created, go to Project Settings → API. Copy the **Project URL**
   and the **anon public** key.
3. Go to the Table Editor → "New table" → name it `artists` and add these
   columns (case matters): `id` (text, primary key), `name` (text),
   `tagline` (text), `label` (text), `genre` (text), `status` (text),
   `hero_color` (text), `bio` (text), `awards` (jsonb), `new_release` (jsonb),
   `songs` (jsonb).
4. Go to Authentication → Policies (or the table's RLS tab) and add a policy
   allowing public `SELECT` — this content is meant to be public, so this is safe.
5. Paste rows in manually via the Table Editor, matching the shape used in
   `js/data.js`.
6. In `index.html` and `artist.html`, add this line above your other scripts:
   `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>`
7. Open `js/supabase-client.js`, set `USE_SUPABASE = true`, and paste in your
   Project URL and anon key.

That's it — the site will now read live from your Supabase table, and if
anything ever fails to load, it automatically falls back to the sample data
so the site never breaks.

## Where to edit things

- **Artists & songs:** `js/data.js` (or Supabase, once connected)
- **Colors, fonts, spacing:** `css/style.css` (all tokens at the top)
- **Homepage layout:** `index.html` + `js/main.js`
- **Artist profile layout:** `artist.html` + `js/artist.js`
