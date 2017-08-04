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
    let genreId;
    $("#Ta1").on("click",function(){
        //genreId= $("#Ta5").attr("id").match(/\d+/g)[0];
        genreId=5;
        doSth(genreId);
    })
    $("#Ta2").on("click",function(){
        genreId=2;
        doSth(genreId);
    })
    $("#Ta3").on("click",function(){
        genreId=3;
        doSth(genreId);
    })
    $("#Ta4").on("click",function(){
        genreId=6;
        doSth(genreId);
    })
    $("#Ta5").on("click",function(){
        genreId=4;
        doSth(genreId);
    })
    $("#Ta6").on("click",function(){
        genreId=9;
        doSth(genreId);
    })
})

function doSth(genreId){
$.get(`/types/${genreId}`,function(movies){
        $("#movieName1").html(movies[0].name);
        $("#movieName2").html(movies[1].name);
        $("#movieName3").html(movies[2].name);
        $("#movieName4").html(movies[3].name);
        $("#movieName5").html(movies[4].name);
        $("#movieName6").html(movies[5].name);
        $("#movieName7").html(movies[6].name);
        $("#movieName8").html(movies[7].name);
        $("#movieName9").html(movies[8].name);
        $("#movieName10").html(movies[9].name);
        $("#movieName11").html(movies[10].name);
        $("#movieName12").html(movies[11].name);


        $("#images1").attr("src",`${movies[0].image}`);
        $("#images2").attr("src",`${movies[1].image}`);
        $("#images3").attr("src",`${movies[2].image}`);
        $("#images4").attr("src",`${movies[3].image}`);
        $("#images5").attr("src",`${movies[4].image}`);
        $("#images6").attr("src",`${movies[5].image}`);
        $("#images7").attr("src",`${movies[6].image}`);
        $("#images8").attr("src",`${movies[7].image}`);
        $("#images9").attr("src",`${movies[8].image}`);
        $("#images10").attr("src",`${movies[9].image}`);
        $("#images11").attr("src",`${movies[10].image}`);
        $("#images12").attr("src",`${movies[11].image}`);
    })
}
