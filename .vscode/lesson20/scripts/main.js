const fetchParams = {
  method: 'GET',
  headers: {
    'X-API-KEY': 'df9265a5-09ee-487b-a04b-e61d92069fe7',
    'Content-Type': 'application/json',
  },
};

const fetchResult = async () => {
  try {
      const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', fetchParams);
      const bodyData = await response.json();

      if (!bodyData.films) {
          throw new Error('Invalid response structure');
      }

      const films = bodyData.films;
      const movieContainer = document.getElementById('movie-container');

      for (const film of films) {
          const filmResponse = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${film.filmId}`, fetchParams);
          const filmData = await filmResponse.json();
          filmData.posterUrl = film.posterUrl;
          const movieBlock = createMovieBlock(filmData);
          movieContainer.appendChild(movieBlock);
      }
  } catch (error) {
      console.error('Error data loading:', error);
  }
};

const createMovieBlock = (filmData) => {
  const block = document.createElement('div');
  block.classList.add('block');
  block.style.backgroundImage = `linear-gradient(transparent 50%, black 100%), url(${filmData.posterUrl})`;

  const topDiv = document.createElement('div');
  topDiv.classList.add('top');

  const yearDiv = document.createElement('div');
  yearDiv.classList.add('year');
  yearDiv.textContent = filmData.year;

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('name');
  nameDiv.textContent = filmData.nameRu;

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');
  descriptionDiv.textContent = filmData.description;

  const genreSpan = document.createElement('span');
  genreSpan.classList.add('genre');
  genreSpan.textContent = filmData.genres[0].genre;

  const ratingSpan = document.createElement('span');
  ratingSpan.classList.add('rating');
  ratingSpan.textContent = `IMDb: ${filmData.ratingImdb}`;  
  
  block.addEventListener('click', () => {
    descriptionDiv.classList.toggle('show');
});

  block.appendChild(ratingSpan);
  block.appendChild(genreSpan);
  topDiv.appendChild(yearDiv);
  topDiv.appendChild(nameDiv);
  topDiv.appendChild(descriptionDiv);
  block.appendChild(topDiv);

  return block;
};

fetchResult();