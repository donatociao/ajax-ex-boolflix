$( document ).ready(function() {
 var urlbase = "https://api.themoviedb.org/3/search/movie"
 var apikey = "?api_key=22d66e8ed9b0566627b219eb7d84cdd3"

 //cerca film
  $('#cerca_button').click(function() {
    var filmToFind = $('#cerca_input').val();

    var card_source = $('#card').html();
    var template = Handlebars.compile(card_source);

    $.ajax({
    url : urlbase + apikey,
    type : "GET",
    data : {
      query : filmToFind
    },
    success : function(risposta) {
      for (var i = 0; i < risposta.results.length; i++) {
        //contesto Handlebars
        var title = risposta.results[i].title;
        var title_orig = risposta.results[i].original_title;
        var lang = risposta.results[i].original_language;
        var vote = risposta.results[i].vote_average;
        //contesto Handlebars
        var context = {
          title: title,
          title_orig: title_orig,
          lang: lang,
          vote: vote
        }
        var html = template(context);
        $('.search_container').append(html);
      }

    },
    error : function (richiesta,stato,errori) {
        alert("E' evvenuto un errore. Il stato della chiamata: "+stato);
    }
});

  });





});
