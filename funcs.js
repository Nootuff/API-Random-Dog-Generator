function genNewImage(){
    axios.get('https://dog.ceo/api/breeds/image/random') //This is the api.
    .then((body) => {
        var url = body.data.message;	
    
     var image = document.getElementById("dogImg");
        var dogText = document.getElementById("dogText");
      
    let urlCutter = url.split('/')[4].split('-');
        
          let first = typeof(urlCutter[1]) == 'undefined' ? "" : urlCutter[1].charAt(0).toUpperCase() + urlCutter[1].split("").slice(1, urlCutter[1].length).join("");
        
          let second = urlCutter[0].charAt(0).toUpperCase() + urlCutter[0].split("").slice(1, urlCutter[0].length).join("");
        
     
      // set the src of the image object
      image.src = url;
        dogText.innerHTML  = first + " " + second;
    })
    .catch((err) => {
    console.log('Error', err.statusCode);
    })
     };
