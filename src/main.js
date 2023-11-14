async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?&api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results
    
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const moviesContainer = document.createElement('div');
        moviesContainer.classList.add('movie-container')

        const moviesImg = document.createElement('img');
        moviesImg.classList.add('movie-img')
        moviesImg.setAttribute('alt', movie.title);
        moviesImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        moviesContainer.appendChild(moviesImg)
        trendingPreviewMoviesContainer.appendChild(moviesContainer)
    })
}
getTrendingMoviesPreview()


async function getCategoriesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?&api_key=' + API_KEY);
    const data = await res.json();

    const categories = data.genres
    
    categories.forEach(category => {
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer)
    })
}
getCategoriesPreview()