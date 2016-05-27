$(document).ready(function(){
  
  // Procura o valor do input apos pressionar enter ou clicar // Search the input value after the Enter key is pressed or clicked on the button search
  $('#search').click(function(){
    wikiAPI();
    });
  $('input').keypress(function (e) {
  if (e.which == 13) {
   wikiAPI();
  }
});
     
     function wikiAPI(){ 
    
    // Recupera o valor do input // Get the input value
  var searchTerm = $("#searchTerm").val();
    
    if (searchTerm==''){
      
    }else {
    
    // Url usado para fazer a pesquisa // Used url to make the search
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
  
  $.ajax({
    url: url,
    async: false,
    dataType: 'json',
    type: 'GET',
    success: function(data){
      
      // Retorna os itens encontrados na pesquisa // Return the items found in the search
      $("#articles").html('');
      
      for(var i=0;i<data.length;i++){
    $("#articles").prepend("<li class='topic'><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }
  },

    // Retorna erro caso algo de errado aconteça // Return error if something wrong happens
    error: function(errorMessage){
      alert("Error");
    }
  });
   }
 }
});