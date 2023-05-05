async function request(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      const data =await  response.json();
      return data;
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad97faf0a8msh929a084fb753888p17e635jsn101c14294127',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};


export async function getMovie(){
    return request('https://movie-database-alternative.p.rapidapi.com/?s=Star%20Wars&r=json&page=1',options)
    
}

export async function getMovieByTitle(movie){
    return request(`https://movie-database-alternative.p.rapidapi.com/?s=${movie}&r=json&page=1`,options)
}