import { getMovie } from '../api/api.js'
import {html} from '../lib.js'

const movieData =await getMovie()



const homeTemplate =(movie) => html`
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
`

 export function homeView(ctx){
   ctx.render(movieData.Search.map(homeTemplate))
}