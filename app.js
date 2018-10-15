
$("#btnSearch").click(function(){

    $("#ulMovieList").empty();

    let txtSearch = $("#txtSearch").val();
    let url = `http://www.omdbapi.com/?s=${txtSearch}&apikey=${apikey}`
    getMovieList(url);
})

function getMovieList(url) {

    $.get(url, function(movies) {
        displayMovieList(movies);
    });
}

function displayMovieList(movies){

    movies.Search.forEach(function(movie) {
        // console.log(movie.Title);
        let title = movie.Title;
        let year = movie.Year;
        let imdbID = movie.imdbID;
        let poster = movie.Poster;


        let urlMovieIdDetails = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
        $.get(urlMovieIdDetails, function(movieDetails) {
            // console.log(movieDetails.imdbID + " inside");
            let Rated = movieDetails.Rated;
            let Released = movieDetails.Released;
            let Runtime = movieDetails.Runtime;
            let Genre = movieDetails.Genre;
            let Director = movieDetails.Director;

            liItem = `<li class="liClass">
                        <div class="divliClass"> 
                            <p class="p-title">${title}</p>
                            <img src=${poster}>
                        </div>

                        <div class="divliClass"> 
                            <p>Year: ${year}</p>
                            <p>Rated: ${Rated}</p>
                            <p>Runtime: ${Runtime}</p>
                            <p>Released: ${Released}</p>
                            <p>Genre: ${Genre}</p>
                            <p>Director: ${Director}</p>

                        </div>

                    </li>`


            $("#ulMovieList").append(liItem);
            
        });
        
    });
}

