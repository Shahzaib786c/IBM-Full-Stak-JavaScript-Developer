const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  let open = navLinks.classList.contains("open");
  if (open === true) {
    menuBtn.textContent = "X";
  } else {
    menuBtn.textContent = "☰";
  }
});

function closeMenu() {
  navLinks.classList.remove("open");
  menuBtn.textContent = "☰";
}

const API_URL = "https://ghibliapi.vercel.app/films";

const loadBtn = document.querySelector("#loadBtn");
const movieList = document.querySelector("#movieList");
const status = document.querySelector("#status");

let moviesCache = [];

loadBtn.addEventListener("click", async () => {
  closeMenu();

  const isVisible = movieList.classList.contains("visible");

  if (isVisible) {
    movieList.classList.remove("visible");
    loadBtn.textContent = "Load Movies";
    return;
  }

  if (moviesCache.length === 0) {
    await getMovies();
  } else {
    renderMovies(moviesCache);
  }

  movieList.classList.add("visible");
  loadBtn.textContent = "Hide Movies";
});

async function getMovies() {
  const res = await fetch(API_URL);
  const movies = await res.json();
  console.log(movies);
  
  console.log("We received", movies.length, "movies");
  const all = movies.slice(0, 22);
  moviesCache = all;
  renderMovies(all);
  
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
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>${movie.release_date} &middot; ${movie.director}</p>
        <p>Score: ${movie.rt_score}</p>
      </div>
    `;
    movieList.appendChild(card);
  });
}
