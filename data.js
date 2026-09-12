/**
 * data.js
 * ------------------------------------------------------------
 * Sample content for CadenceIQ.
 *
 * This file is the ENTIRE database for the demo. Once you set up
 * Supabase (see README.md), you can delete this file and instead
 * fetch the same shape of objects from your `artists` and `songs`
 * tables inside js/supabase-client.js.
 *
 * Established-artist bios below are general public-record facts
 * (awards, labels, release history) — swap in your own copy any
 * time. The two "Rising" artists are clearly-marked placeholders
 * for you to replace with real unsigned/independent acts.
 * ------------------------------------------------------------
 */

/**
 * Hero background video (homepage only — NOT used site-wide).
 * Paste a real YouTube video ID here to play it muted/looping behind
 * the hero headline (e.g. a Fela Kuti or Wizkid video). Leave empty
 * to keep the plain marquee-only hero. See README.md for how to
 * grab a video ID in 10 seconds from the YouTube app.
 */
const HERO_VIDEO = {
  youtubeId: "HLnf2Hz7uNQ",
  credit: "Video via YouTube",
};

const ARTISTS = [
  {
    id: "fela-kuti",
    name: "Fela Kuti",
    tagline: "The Originator of Afrobeat",
    label: "Independent / Kalakuta Records",
    genre: "Afrobeat",
    status: "legend",
    category: "Legends & Pioneers",
    heroColor: "#E8B74B",
    bio: "Fela Anikulapo Kuti fused highlife, jazz, and funk with Yoruba rhythms to create Afrobeat in the late 1960s, using it as both dance music and political protest against Nigeria's military governments. His band Africa '70, and later Egypt 80, turned tracks like 'Zombie' and 'Water No Get Enemy' into global touchstones that every modern Afrobeats artist still traces their sound back to.",
    awards: [
      { year: 1983, name: "Grammy Award nomination — Best Ethnic/Traditional Recording" },
      { year: 2021, name: "Rock Hall of Fame — Ahmet Ertegun nominee (posthumous)" }
    ],
    newRelease: { title: "Legacy reissues via Knitting Factory Records", year: 2024 },
    songs: [
      { title: "Zombie", year: 1976, album: "Zombie", youtubeSearch: "Fela Kuti Zombie official", spotifySearch: "Fela Kuti Zombie" },
      { title: "Water No Get Enemy", year: 1975, album: "Expensive Shit", youtubeSearch: "Fela Kuti Water No Get Enemy", spotifySearch: "Fela Kuti Water No Get Enemy" }
    ]
  },
  {
    id: "king-sunny-ade",
    name: "King Sunny Adé",
    tagline: "The Minister of Enjoyment",
    label: "Independent / Sunny Alade Records",
    genre: "Jùjú",
    status: "legend",
    category: "Legends & Pioneers",
    heroColor: "#1FAE6E",
    bio: "King Sunny Adé modernized Jùjú music, layering pedal-steel guitar and talking drums over its traditional Yoruba percussion base, and became the first Nigerian artist widely marketed to a global audience in the early 1980s. His decades-long career helped define what Nigerian music could sound like on the world stage long before the term 'Afrobeats' existed.",
    awards: [
      { year: 1983, name: "Grammy Award nomination", work: "Synchro System" },
      { year: 2010, name: "Recording Academy Lifetime Recognition Honoree" }
    ],
    newRelease: { title: "Catalogue available on all streaming platforms", year: 2023 },
    songs: [
      { title: "Synchro System", year: 1983, album: "Synchro System", youtubeSearch: "King Sunny Ade Synchro System", spotifySearch: "King Sunny Ade Synchro System" },
      { title: "365 Is My Number", year: 1980, album: "The Message", youtubeSearch: "King Sunny Ade 365 Is My Number", spotifySearch: "King Sunny Ade 365 Is My Number" }
    ]
  },
  {
    id: "burna-boy",
    name: "Burna Boy",
    tagline: "The African Giant",
    label: "Spaceship Entertainment / Atlantic Records",
    genre: "Afro-fusion",
    status: "established",
    category: "Afrobeats Icons",
    heroColor: "#FF7A3D",
    bio: "Born Damini Ebunoluwa Ogulu in Port Harcourt, Burna Boy fuses Afrobeats, dancehall, and highlife into a sound he calls Afro-fusion. Grandson of Benson Idonije, Fela Kuti's first manager, he grew up steeped in Nigerian music history before breaking through internationally with the album African Giant.",
    awards: [
      { year: 2021, name: "Grammy Award — Best Global Music Album", work: "Twice As Tall" },
      { year: 2023, name: "The Headies — Song of the Year", work: "Last Last" },
      { year: 2019, name: "BET Award — Best International Act" }
    ],
    newRelease: { title: "Sittin' On Top Of The World", year: 2024 },
    songs: [
      { title: "Last Last", year: 2022, album: "Love, Damini", youtubeSearch: "Burna Boy Last Last official video", spotifySearch: "Burna Boy Last Last" },
      { title: "City Boys", year: 2023, album: "I Told Them...", youtubeSearch: "Burna Boy City Boys official video", spotifySearch: "Burna Boy City Boys" },
      { title: "On The Low", year: 2019, album: "African Giant", youtubeSearch: "Burna Boy On The Low official video", spotifySearch: "Burna Boy On The Low" }
    ]
  },
  {
    id: "wizkid",
    name: "Wizkid",
    tagline: "Starboy",
    label: "Starboy Entertainment / RCA Records",
    genre: "Afrobeats / R&B",
    status: "established",
    category: "Afrobeats Icons",
    heroColor: "#1FAE6E",
    bio: "Ayodeji Ibrahim Balogun, known as Wizkid, emerged from Surulere, Lagos, to become one of the artists who carried Afrobeats to a global audience. His 2016 feature on Drake's 'One Dance' became one of the best-selling singles of all time, and his own catalogue spans Superstar to Made In Lagos.",
    awards: [
      { year: 2016, name: "MOBO Award — Best African Act" },
      { year: 2021, name: "Grammy Award — Best Music Video (feat.)", work: "Brown Skin Girl" },
      { year: 2020, name: "The Headies — Album of the Year", work: "Made In Lagos" }
    ],
    newRelease: { title: "Morayo", year: 2024 },
    songs: [
      { title: "Essence", year: 2020, album: "Made In Lagos", youtubeSearch: "Wizkid Essence official video", spotifySearch: "Wizkid Essence Tems" },
      { title: "Ojuelegba", year: 2014, album: "Ayo", youtubeSearch: "Wizkid Ojuelegba official video", spotifySearch: "Wizkid Ojuelegba" },
      { title: "Kese (Dance)", year: 2024, album: "Morayo", youtubeSearch: "Wizkid Kese official video", spotifySearch: "Wizkid Kese" }
    ]
  },
  {
    id: "davido",
    name: "Davido",
    tagline: "OBO / 30BG",
    label: "Davido Music Worldwide (DMW) / RCA Records",
    genre: "Afrobeats / Afropop",
    status: "established",
    category: "Afrobeats Icons",
    heroColor: "#4CC9F0",
    bio: "David Adeleke, known as Davido, founded the DMW label and has spent over a decade as one of the most consistent hitmakers in Afrobeats, known for anthemic, feature-heavy singles and a close-knit roster of artists he's helped launch.",
    awards: [
      { year: 2018, name: "BET Award — Best International Act" },
      { year: 2023, name: "The Headies — Artist of the Year" }
    ],
    newRelease: { title: "5ive", year: 2025 },
    songs: [
      { title: "Unavailable", year: 2023, album: "Timeless", youtubeSearch: "Davido Unavailable official video", spotifySearch: "Davido Unavailable" },
      { title: "Fall", year: 2017, album: "A Good Time", youtubeSearch: "Davido Fall official video", spotifySearch: "Davido Fall" }
    ]
  },
  {
    id: "rema",
    name: "Rema",
    tagline: "The Trap-Afrobeats Prince",
    label: "Mavin Records / Jonzing World",
    genre: "Afrobeats / Trap",
    status: "established",
    category: "Afrobeats Icons",
    heroColor: "#9D4EDD",
    bio: "Divine Ikubor, known as Rema, was signed to Mavin Records as a teenager out of Benin City and built a sound he calls Afrorave — trap drums layered under Afrobeats melody. His single 'Calm Down' became one of the longest-charting African songs on the Billboard Hot 100.",
    awards: [
      { year: 2022, name: "The Headies — Next Rated" },
      { year: 2024, name: "Grammy Award nomination — Best African Music Performance", work: "Calm Down (remix)" }
    ],
    newRelease: { title: "HEIS", year: 2024 },
    songs: [
      { title: "Calm Down", year: 2022, album: "Rave & Roses", youtubeSearch: "Rema Calm Down official video", spotifySearch: "Rema Calm Down" },
      { title: "Ozeba", year: 2024, album: "HEIS", youtubeSearch: "Rema Ozeba official video", spotifySearch: "Rema Ozeba" }
    ]
  },
  {
    id: "tems",
    name: "Tems",
    tagline: "The Leader",
    label: "Since '93 / RCA Records",
    genre: "Alté / R&B",
    status: "established",
    category: "Alté & R&B",
    heroColor: "#C9A24B",
    bio: "Temilade Openiyi, professionally known as Tems, built her sound in Lagos on smoky, alté-leaning R&B before her feature on Wizkid's 'Essence' introduced her voice to the world. She has since released her own acclaimed projects and become one of the most sought-after collaborators in global pop.",
    awards: [
      { year: 2022, name: "Grammy Award — Best Melodic Rap Performance (feat.)", work: "Wait For U" },
      { year: 2022, name: "BET Award — Best International Act" }
    ],
    newRelease: { title: "Born In The Wild", year: 2024 },
    songs: [
      { title: "Free Mind", year: 2021, album: "If Orange Was A Place", youtubeSearch: "Tems Free Mind official video", spotifySearch: "Tems Free Mind" },
      { title: "Me & U", year: 2024, album: "Born In The Wild", youtubeSearch: "Tems Me & U official video", spotifySearch: "Tems Me & U" }
    ]
  },
  {
    id: "omah-lay",
    name: "Omah Lay",
    tagline: "The Boy From Port Harcourt",
    label: "KeyQaad / Sire Records",
    genre: "Alté / Afrobeats",
    status: "established",
    category: "Alté & R&B",
    heroColor: "#3FA7D6",
    bio: "Stanley Omah Didia, known as Omah Lay, writes moody, melodic songs about heartbreak and mental health that helped define the alté-leaning edge of modern Afrobeats. His debut EP 'Get Layd' produced back-to-back hits before he'd released a full album.",
    awards: [
      { year: 2020, name: "The Headies — Next Rated" },
      { year: 2023, name: "The Headies — Best Alternative Song", work: "Reason" }
    ],
    newRelease: { title: "Stand Strong", year: 2024 },
    songs: [
      { title: "Godspeed", year: 2020, album: "Get Layd", youtubeSearch: "Omah Lay Godspeed official video", spotifySearch: "Omah Lay Godspeed" },
      { title: "Soso", year: 2020, album: "Get Layd", youtubeSearch: "Omah Lay Soso official video", spotifySearch: "Omah Lay Soso" }
    ]
  },
  {
    id: "asake",
    name: "Asake",
    tagline: "Mr. Money",
    label: "YBNL Nation / Empire",
    genre: "Amapiano / Fuji-fusion",
    status: "established",
    category: "Amapiano Wave",
    heroColor: "#E63946",
    bio: "Ahmed Ololade, known as Asake, trained in theatre arts before turning fully to music. Signed to Olamide's YBNL Nation, he blends fuji, amapiano log-drum rhythms, and street-pop chants, and his debut album Mr. Money With The Vibe went straight to the top of Nigerian charts.",
    awards: [
      { year: 2023, name: "The Headies — Next Rated" },
      { year: 2023, name: "The Headies — Best Vocal Performance (Male)", work: "Terminator" }
    ],
    newRelease: { title: "Lonely At The Top", year: 2024 },
    songs: [
      { title: "Terminator", year: 2023, album: "Work of Art", youtubeSearch: "Asake Terminator official video", spotifySearch: "Asake Terminator" },
      { title: "Sungba", year: 2022, album: "Mr. Money With The Vibe", youtubeSearch: "Asake Sungba official video", spotifySearch: "Asake Sungba" }
    ]
  },
  {
    id: "ayra-starr",
    name: "Ayra Starr",
    tagline: "The Prodigy",
    label: "Mavin Records",
    genre: "Afropop",
    status: "established",
    category: "Afrobeats Icons",
    heroColor: "#F72585",
    bio: "Oyinkansola Sarah Aderibigbe, known as Ayra Starr, was signed to Mavin Records as a teenager and quickly became one of Afropop's defining young voices, known for candid lyrics about self-worth and independence delivered over glossy, dance-ready production.",
    awards: [
      { year: 2022, name: "The Headies — Next Rated" },
      { year: 2024, name: "BET Award — Best International Act" }
    ],
    newRelease: { title: "Woman Commando", year: 2024 },
    songs: [
      { title: "Rush", year: 2022, album: "19 & Dangerous", youtubeSearch: "Ayra Starr Rush official video", spotifySearch: "Ayra Starr Rush" },
      { title: "Commas", year: 2024, album: "The Year I Turned 21", youtubeSearch: "Ayra Starr Commas official video", spotifySearch: "Ayra Starr Commas" }
    ]
  },
  {
    id: "tiwa-savage",
    name: "Tiwa Savage",
    tagline: "Queen of Afrobeats",
    label: "After Water (independent)",
    genre: "Afropop / R&B",
    status: "established",
    category: "Alté & R&B",
    heroColor: "#E8B74B",
    bio: "Tiwatope Savage trained at the Berklee College of Music and wrote for major international artists before returning to Nigeria to become one of its most influential female vocalists, known for bridging Afropop with R&B songwriting.",
    awards: [
      { year: 2021, name: "BET Award — Best International Act" },
      { year: 2018, name: "The Headies — Best Female Vocal Performance" }
    ],
    newRelease: { title: "This One Is Personal", year: 2024 },
    songs: [
      { title: "Somebody's Son", year: 2020, album: "Celia", youtubeSearch: "Tiwa Savage Somebody's Son official video", spotifySearch: "Tiwa Savage Somebody's Son" },
      { title: "Koroba", year: 2022, album: "Water & Garri", youtubeSearch: "Tiwa Savage Koroba official video", spotifySearch: "Tiwa Savage Koroba" }
    ]
  }
];

/**
 * "Rising" artists — the "upcoming / newly signed" spotlight section.
 * These four entries are EXAMPLE placeholders (not real people). Replace
 * with real independent/unsigned artists you want to promote — same
 * shape of object, just swap the details and a real playlist link.
 */
const RISING_ARTISTS = [
  {
    id: "rising-kesari",
    name: "Kesari",
    tagline: "Fresh signee — Lagos",
    label: "Independent",
    genre: "Alté / Amapiano",
    status: "rising",
    category: "Amapiano Wave",
    heroColor: "#3FA7D6",
    bio: "[Example placeholder] A vocalist and producer from Lagos blending log-drum rhythms with alté songwriting. Replace this bio with your artist's real story.",
    playlistSearch: "Kesari Lagos artist playlist",
    songs: [
      { title: "Debut single (add title)", year: 2025, youtubeSearch: "", spotifySearch: "" }
    ]
  },
  {
    id: "rising-tobi-shine",
    name: "Tobi Shine",
    tagline: "One to watch — Abuja",
    label: "Independent",
    genre: "Afrobeats",
    status: "rising",
    category: "Afrobeats Icons",
    heroColor: "#F2C14E",
    bio: "[Example placeholder] A songwriter from Abuja whose first EP is gaining traction on playlists. Replace this bio with your artist's real story.",
    playlistSearch: "Tobi Shine Abuja artist playlist",
    songs: [
      { title: "Debut single (add title)", year: 2025, youtubeSearch: "", spotifySearch: "" }
    ]
  },
  {
    id: "rising-chiamaka-grace",
    name: "Chiamaka Grace",
    tagline: "New voice — Enugu",
    label: "Independent",
    genre: "Afro-gospel",
    status: "rising",
    category: "Afro-Gospel",
    heroColor: "#8AC926",
    bio: "[Example placeholder] A gospel vocalist from Enugu bringing choir-rooted harmonies into modern Afropop arrangements. Replace this bio with your artist's real story.",
    playlistSearch: "Chiamaka Grace Enugu artist playlist",
    songs: [
      { title: "Debut single (add title)", year: 2025, youtubeSearch: "", spotifySearch: "" }
    ]
  },
  {
    id: "rising-duru-legacy",
    name: "Duru Legacy",
    tagline: "Newly signed — Owerri",
    label: "Independent",
    genre: "Highlife revival",
    status: "rising",
    category: "Highlife Revival",
    heroColor: "#EF7B45",
    bio: "[Example placeholder] A guitarist and singer from Owerri modernizing highlife's guitar-driven grooves for a streaming-era audience. Replace this bio with your artist's real story.",
    playlistSearch: "Duru Legacy Owerri artist playlist",
    songs: [
      { title: "Debut single (add title)", year: 2025, youtubeSearch: "", spotifySearch: "" }
    ]
  }
];

const ALL_PROFILES = [...ARTISTS, ...RISING_ARTISTS];

function getArtistById(id) {
  return ALL_PROFILES.find((a) => a.id === id) || null;
}
