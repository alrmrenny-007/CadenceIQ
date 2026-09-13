/* artists-directory.js — renders every artist, grouped by category, with a status filter */

let __allArtists = [];
let __activeFilter = "all";

const STATUS_LABELS = {
  all: "All",
  legend: "Legends",
  established: "Artists",
  rising: "Rising",
};

function renderFilterRow() {
  const row = document.getElementById("filter-row");
  row.innerHTML = Object.entries(STATUS_LABELS)
    .map(
      ([key, label]) =>
        `<button class="filter-chip${key === __activeFilter ? " active" : ""}" data-filter="${key}">${label}</button>`
    )
    .join("");

  row.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      __activeFilter = btn.dataset.filter;
      renderFilterRow();
      renderDirectory();
    });
  });
}

function renderDirectory() {
  const list =
    __activeFilter === "all"
      ? __allArtists
      : __allArtists.filter((a) => a.status === __activeFilter);

  const groups = {};
  list.forEach((a) => {
    const cat = a.category || "Other";
    (groups[cat] = groups[cat] || []).push(a);
  });

  const el = document.getElementById("directory");
  if (!list.length) {
    el.innerHTML = `<p style="color:var(--text-muted);padding:40px 0;">No artists in this category yet.</p>`;
    return;
  }

  el.innerHTML = Object.entries(groups)
    .map(
      ([cat, items]) => `
      <div class="section reveal" style="padding-top:28px;padding-bottom:28px;">
        <h2 class="section-label" style="margin:0 0 18px;">${cat}</h2>
        <div class="tile-grid">${items.map(artistCardHTML).join("")}</div>
      </div>`
    )
    .join("");
  if (window.initScrollReveal) window.initScrollReveal();
}

async function initArtistsPage() {
  renderFilterRow();
  __allArtists = await fetchArtists();
  renderDirectory();
}

document.addEventListener("DOMContentLoaded", initArtistsPage);
