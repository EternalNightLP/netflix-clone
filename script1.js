const user = localStorage.getItem("user");
if (!user && !window.location.href.includes("login.html")) {
  window.location.href = "login.html";
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = shows.filter((show) =>
      show.title.toLowerCase().includes(query)
    );
    renderRows(filtered);
  });
}

function renderRows(data) {
  const container = document.getElementById("movieRows");
  if (!container) return;
  container.innerHTML = data
    .map(
      (show) => `
    <div class="movie-card">
      <a href="details.html?id=${show.id}">
        <img src="${show.image}" alt="${show.title}" />
        <p>${show.title}</p>
      </a>
    </div>
  `
    )
    .join("");
}

if (document.getElementById("movieRows")) {
  renderRows(shows);
}
