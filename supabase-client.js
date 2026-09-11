/**
 * supabase-client.js
 * ------------------------------------------------------------
 * OPTIONAL. The site works fully offline right now using the
 * sample data in js/data.js. Flip USE_SUPABASE to true once
 * you've done the steps in README.md and this file will fetch
 * artists from your own Supabase project instead.
 *
 * 1. Create a project at https://supabase.com
 * 2. Project Settings -> API -> copy "Project URL" and "anon public" key
 * 3. Paste them below.
 * 4. Create a table called `artists` with (at minimum) these columns:
 *      id           text (primary key)   e.g. "burna-boy"
 *      name         text
 *      tagline      text
 *      label        text
 *      genre        text
 *      status       text                 "established" or "rising"
 *      hero_color   text                 e.g. "#FF7A3D"
 *      bio          text
 *      awards       jsonb                [{year, name, work}]
 *      new_release  jsonb                {title, year}
 *      songs        jsonb                [{title, year, album, youtubeSearch, spotifySearch}]
 * 5. Set Row Level Security -> add a policy allowing public SELECT,
 *    since this is public read-only content.
 * ------------------------------------------------------------
 */

const USE_SUPABASE = true;

const SUPABASE_URL = "https://vswlrdngaifzjrdvtgsr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzd2xyZG5nYWlmempyZHZ0Z3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNTg5MDYsImV4cCI6MjEwNDczNDkwNn0.RJMI3sdFxjx2BFAEV_dA9uP90EpP7UU_HHLTvGFk0b0";

let _supabaseClient = null;

function getSupabaseClient() {
  if (!USE_SUPABASE) return null;
  if (_supabaseClient) return _supabaseClient;
  // Requires the Supabase JS library loaded on the page:
  // <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  if (typeof supabase === "undefined") {
    console.warn("Supabase JS library not loaded — add the script tag from README.md");
    return null;
  }
  _supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return _supabaseClient;
}

/**
 * Fetches every artist row. Falls back to the local ALL_PROFILES
 * array (from data.js) if Supabase isn't configured or the
 * request fails, so the site never breaks.
 */
async function fetchArtists() {
  const client = getSupabaseClient();
  if (!client) return ALL_PROFILES;

  const { data, error } = await client.from("artists").select("*");
  if (error || !data) {
    console.warn("Supabase fetch failed, using local sample data:", error);
    return ALL_PROFILES;
  }
  // Map snake_case DB columns back to the camelCase shape the UI expects.
  return data.map((row) => ({
    id: row.id,
    name: row.name,
    tagline: row.tagline,
    label: row.label,
    genre: row.genre,
    status: row.status,
    heroColor: row.hero_color,
    bio: row.bio,
    awards: row.awards || [],
    newRelease: row.new_release || null,
    songs: row.songs || [],
  }));
}
