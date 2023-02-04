$.ajax({
    url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
    method: 'GET',
    dataType: "json",
    success: function(data) {
        var clothingSection = document.getElementById('clothing-section');
        var accessoriesSection = document.getElementById('accessories-section');
        for(var i=0; i<data.length; i++) {
          var product = data[i];
        var card = document.createElement("div");
        card.classList.add('card');
        var img = document.createElement("img");
        var a = document.createElement("a");
        a.classList.add('a');
        a.href ="/Pdp/pdp.html?productId=" + product.id;
        img.classList.add('img');
        img.src = product.preview;
        var h3 = document.createElement("div");
        h3.classList.add('h3');
        h3.innerText = product.name;
        var h5 = document.createElement("div");
        h5.innerText = product.brand;
        h5.classList.add('h5');
        var span = document.createElement("div");
        span.classList.add('price');
        span.innerText = "Rs" + product.price;
        a.append(img)
        card.append(a,h3,h5,span);
        
        if(product.isAccessory === true) {
          accessoriesSection.append(card);
        }
          else {
            clothingSection.append(card);
          }
        
        }
           
     }
  }) 
  
    
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  