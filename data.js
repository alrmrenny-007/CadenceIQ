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

const ARTISTS = [
  {
    id: "burna-boy",
    name: "Burna Boy",
    tagline: "The African Giant",
    label: "Spaceship Entertainment / Atlantic Records",
    genre: "Afro-fusion",
    status: "established",
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
    id: "tems",
    name: "Tems",
    tagline: "The Leader",
    label: "Since '93 / RCA Records",
    genre: "Alté / R&B",
    status: "established",
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
    id: "asake",
    name: "Asake",
    tagline: "Mr. Money",
    label: "YBNL Nation / Empire",
    genre: "Amapiano / Fuji-fusion",
    status: "established",
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
    heroColor: "#9D4EDD",
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
  }
];

/**
 * "Rising" artists — the "upcoming / newly signed" spotlight section.
 * These two entries are EXAMPLE placeholders (not real people). Replace
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
    heroColor: "#F2C14E",
    bio: "[Example placeholder] A songwriter from Abuja whose first EP is gaining traction on playlists. Replace this bio with your artist's real story.",
    playlistSearch: "Tobi Shine Abuja artist playlist",
    songs: [
      { title: "Debut single (add title)", year: 2025, youtubeSearch: "", spotifySearch: "" }
    ]
  }
];

const ALL_PROFILES = [...ARTISTS, ...RISING_ARTISTS];

function getArtistById(id) {
  return ALL_PROFILES.find((a) => a.id === id) || null;
}
