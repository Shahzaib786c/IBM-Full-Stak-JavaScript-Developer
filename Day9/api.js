// the API address — no key needed
const API_URL = "https://ghibliapi.vercel.app/films";
// select our elements once, at the top
const loadBtn = document.querySelector("#loadBtn");
const movieList = document.querySelector("#movieList");
const status = document.querySelector("#status");
// listen for the click
loadBtn.addEventListener("click", () => {
    getMovies(); // we will write this function next
});

async function getMovies() {
    const res = await fetch(API_URL); // 1. ask the API
    const movies = await res.json(); // 2. turn the reply into an array
    console.log(movies); // 3. always look at the data first!
    console.log("We received", movies.length, "movies");
    const firstSix = movies.slice(0, 6); // 4. keep just the first 6
    renderMovies(firstSix); // 5. draw them on the page
}

function renderMovies(movies) {
    movieList.innerHTML = ""; // 1. clear any old cards
    movies.forEach((movie) => {
        const card = document.createElement("div"); // 2. create
        card.classList.add("movie-card"); // 3. add the class
        card.innerHTML = `
 <h3>${movie.title}</h3>
 <p>${movie.release_date} &middot; ${movie.director}</p>
 <p>Score: ${movie.rt_score}</p>
 `; // 4. fill it
        movieList.appendChild(card); // 5. put it on the page
    });
}

async function getMovies() {
    // show the loading message
    status.textContent = "Loading movies...";
    status.classList.remove("hidden"); // show it
    status.classList.remove("error"); // clear any old error style
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Status " + res.status);
        }
        const movies = await res.json();
        renderMovies(movies.slice(0, 6));
        status.classList.add("hidden"); // hide the message — we are done
    } catch (error) {
        status.textContent = "Sorry, could not load movies.";
        status.classList.add("error"); // turn the message red
    }
}

