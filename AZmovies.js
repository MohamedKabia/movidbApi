$(document).ready(function(){
	
	$('#search').click(function(e){
		e.preventDefault();
		var movie_title=$('#movie').val();
		 if(movie_title!=''){
			 $('#movie').val(' ');
			 var api_key = "09672dc92114e6bfd5851b50beeffeb3";
			 $.ajax({
				 url: "https://api.themoviedb.org/3/search/movie?api_key="+api_key+"&query=" + movie_title + "",
				 type: "GET",
				 dataType: 'json',
				 async: 'false',
				 success: function(data){

					 movies=data.results;
					 result='';
	
					     $.each(movies,function(index,movie){
							  result +="<div class='col-md-3 col-xs-3 col-lg-2'><div id='content'>";
							  result +="<img  title="+ movie.release_date +" src='https://image.tmdb.org/t/p/w185/"+movie.poster_path+"'>";
							  result +="<p><i class='fas fa-vote-yea'></i> "+movie.popularity+"</p>";
						      result +="</div></div>";	
					 });
					 
					 $('.display').html(result);
					 $('img').click(function(){
						alert(data.movie.popularity);
					});
			 }
			
	});//end ajax 
	}//end if
	});//end search query
    
		 
});
 
    

