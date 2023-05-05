import { html, render } from "../lib.js";
import { getMovieByTitle } from "../api/api.js";

const main = document.querySelector("#main");

const searchTemplate = (movie) => html`
  <div class="movie">
    <img src=${movie.Poster} alt="Image" />

    <div class="movie-info">
      <h3>${movie.Title}</h3>
      <span class="green">${movie.Year}</span>
    </div>

    <div class="overview">
      <h3>Details:</h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel pariatur
      totam tenetur id in laudantium sit magnam. Totam, laborum vitae?
    </div>
  </div>
`;

export async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const searchMovie = formData.get("Search").trim();

  if (searchMovie === "") {
    return alert("Please fill the input with movie name!");
  }

  const movieData = await getMovieByTitle(searchMovie);

  render(movieData.Search.map(searchTemplate), main);
}
