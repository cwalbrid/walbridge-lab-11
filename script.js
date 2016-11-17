$(function(){
  
  //Create a variable for the Reddit json
  var redditData;
  
  //request json from Reddit
  $.get('https://www.reddit.com/r/animalsbeingbros/.json', function(data){
    //console.log(data);
    
    //save the json
    redditData = data;
    
  
  	  //display the information on a page
  		//console.log(redditData)
  
 			//access the children array
      //console.log(redditData.data.children[0].data.title);
      
      //Display all the titles from the chidlren/post array
      for(i = 0; i < 10; i++){
      
      //capturing values we want
      var postLink = redditData.data.children[i].data.url;
      	console.log(postLink)
      var thumbnail = redditData.data.children[i].data.thumbnail;
      var postTitle = redditData.data.children[i].data.title;
      var post = $('<li> <a href=' + postLink + '><img src='+ thumbnail +'>'+ postTitle +'</a></li>');
     
      $('#list').append(post);	
     	//methods to populate our HTML 
      };
  
  }); 
  

  
});

 
