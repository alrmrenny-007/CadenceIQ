/* admin.js — Image Manager: paste a URL, see it rendered live, export the changes */

function adminTileHTML(a) {
  return `
    <div class="tile admin-tile" data-id="${a.id}">
      <div class="admin-avatar-slot">${avatarHTML(a)}</div>
      <div class="tile-caption">
        <div class="name">${a.name}</div>
        <div class="sub">${a.tagline}</div>
      </div>
      <input
        type="url"
        class="admin-input"
        placeholder="Paste image URL"
        value="${a.image ? a.image.replace(/"/g, "&quot;") : ""}"
        data-id="${a.id}"
        autocomplete="off"
      />
      <div class="admin-status" data-status-for="${a.id}"></div>
    </div>`;
}

function renderAdminGrid() {
  const grid = document.getElementById("admin-grid");
  grid.innerHTML = ALL_PROFILES.map(adminTileHTML).join("");

  grid.querySelectorAll(".admin-input").forEach((input) => {
    let debounceTimer;
    input.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      const id = input.dataset.id;
      const statusEl = grid.querySelector(`[data-status-for="${id}"]`);
      const url = input.value.trim();

      if (!url) {
        updateTilePreview(id, null);
        statusEl.textContent = "";
        statusEl.className = "admin-status";
        return;
      }

      statusEl.textContent = "Checking…";
      statusEl.className = "admin-status checking";

      debounceTimer = setTimeout(() => {
        const testImg = new Image();
        testImg.onload = () => {
          updateTilePreview(id, url);
          statusEl.textContent = "✓ Looks good";
          statusEl.className = "admin-status ok";
        };
        testImg.onerror = () => {
          statusEl.textContent = "⚠ Couldn't load this link — check it's a direct image URL";
          statusEl.className = "admin-status bad";
        };
        testImg.src = url;
      }, 400);
    });
  });
}

function updateTilePreview(id, url) {
  const artist = ALL_PROFILES.find((a) => a.id === id);
  if (!artist) return;
  const tile = document.querySelector(`.admin-tile[data-id="${id}"]`);
  const slot = tile.querySelector(".admin-avatar-slot");
  slot.innerHTML = avatarHTML({ ...artist, image: url });
}

function collectChanges() {
  const changes = [];
  document.querySelectorAll(".admin-input").forEach((input) => {
    const url = input.value.trim();
    if (url) changes.push({ id: input.dataset.id, url });
  });
  return changes;
}

function showOutput(text) {
  const out = document.getElementById("export-output");
  out.style.display = "block";
  out.value = text;
  out.focus();
  out.select();
  const status = document.getElementById("copy-status");
  navigator.clipboard
    ?.writeText(text)
    .then(() => {
      status.textContent = "Copied to clipboard!";
      setTimeout(() => (status.textContent = ""), 3000);
    })
    .catch(() => {
      status.textContent = "Select the text below and copy manually.";
    });
}

function initAdminPage() {
  renderAdminGrid();

  document.getElementById("gen-sql").addEventListener("click", () => {
    const changes = collectChanges();
    if (!changes.length) {
      showOutput("-- No image URLs entered yet.");
      return;
    }
    const sql = changes
      .map((c) => `update artists set image = '${c.url.replace(/'/g, "''")}' where id = '${c.id}';`)
      .join("\n");
    showOutput(sql);
  });

  document.getElementById("gen-datajs").addEventListener("click", () => {
    const changes = collectChanges();
    if (!changes.length) {
      showOutput("// No image URLs entered yet.");
      return;
    }
    const snippet = changes
      .map((c) => {
        const artist = ALL_PROFILES.find((a) => a.id === c.id);
        return `// ${artist ? artist.name : c.id} — add inside its object in data.js:\nimage: "${c.url}",`;
      })
      .join("\n\n");
    showOutput(snippet);
  });
}

document.addEventListener("DOMContentLoaded", initAdminPage);
