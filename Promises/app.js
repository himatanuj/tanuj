function quotes(){

    

     
    let change = Math.floor(Math.random()*1000 );

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   ;
    document.getElementById('quote').innerHTML =  data[change].text;
  });
}
quotes()

