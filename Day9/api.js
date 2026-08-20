const API_URL = "https://ghibliapi.vercel.app/films";
const loadBtn = document.querySelector("#loadBtn");
const movieList = document.querySelector("#movieList");
const status = document.querySelector("#status");

let moviesCache = [];
const buttonText = loadBtn.textContent.trim() || "Load Movies";
movieList.classList.add("hidden");
loadBtn.textContent = buttonText;

loadBtn.addEventListener("click", async () => {
  if (movieList.classList.contains("hidden")) {
    if (moviesCache.length === 0) {
      await getMovies();
    } else {
      renderMovies(moviesCache);
    }

    movieList.classList.remove("hidden");
    loadBtn.textContent = "Hide Movies";
  } else {
    movieList.classList.add("hidden");
    loadBtn.textContent = buttonText;
  }
});

async function getMovies() {
  status.textContent = "Getting Movies for you 🫵🏻😂...";
  status.classList.remove("hidden", "error");

  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Status " + res.status);
    }

    const movies = await res.json();
    moviesCache = movies.slice(0, 22);
    renderMovies(moviesCache);
    status.classList.add("hidden");
  } catch (error) {
    status.textContent = "Sorry, could not load movies.";
    status.classList.add("error");
  }
}

function renderMovies(movies) {
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <div class="movie-poster">
        <img src="${movie.image}" alt="${movie.title}">
      </div>
      <h3>${movie.title}</h3>
      <p>${movie.release_date} &middot; ${movie.director}</p>
      <p>Score: ${movie.rt_score}</p>
    `;

    movieList.appendChild(card);
  });
}
