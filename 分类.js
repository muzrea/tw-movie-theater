'use strict'
/*
$(document).read(function(){
    let genreId;
    $.get(`/types/${genreId}`,function(movieToType){
        $("#movieId").value = movieToType.movieId;
        $("#genreId").value = movieToType.genreId;
    });
});
*/
//首先 函数得到返回值，然后覆盖页面
//
$(document).ready(function(){
    let genreId = document.getElementById('Ta');
    $.get(`/types/${genreId}`,function(movie){
        $("#movieName").html(movie.name);
        $("#images").attr("src",`${movie.image}`);
    })
})
