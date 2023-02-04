var queryParams = location.search;
var params = new URLSearchParams(queryParams);
var productId = params.get('productId');
console.log(productId);
var currentObj;

$.ajax({
  url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId ,
  method: 'GET',
  dataType: "json",
  success: function(data) {
    currentObj = data;
 var container = document.createElement('div');
container.classList.add("container");
document.body.append(container);

var previewImageContainer = document.createElement('div');
previewImageContainer.classList.add('preview-container');
var detailsContainer = document.createElement('div');
detailsContainer.classList.add('details-container');

container.append(previewImageContainer , detailsContainer);

var previewImage = document.createElement("img");
previewImage.classList.add("preview-image");
previewImage.src = data.photos[0];
 previewImageContainer.append(previewImage);  

 var productName= document.createElement("h1");
 productName.classList.add("product-name");
 productName.innerText = data.name;
 var brand = document.createElement("h4");
 brand.classList.add("product-brand");
 brand.innerText = data.brand;
 var price = document.createElement("h4");
 price.classList.add("priceClass");
 price.innerText = "Price: Rs";
 var priceText = document.createElement("h4");
 priceText.classList.add("priceTextClass");
 priceText.innerText = data.price;
 price.append(priceText);
 var description = document.createElement("h4");
 description.classList.add("desc-class");
 description.innerText = "Description";
 var descText = document.createElement("p");
 descText.classList.add("desc-text-class");
 descText.innerText = data.description;
 var productPreview = document.createElement("h4");
 productPreview.classList.add("product-preview");
 productPreview.innerText = "Product Preview";

var productImgContainer = document.createElement("div");
   productImgContainer.classList.add("imgContainer");

var productImages = data.photos;

for(var i=0; i<productImages.length; i++) {
var productImg = document.createElement("img");
      productImg.classList.add("product-img");
      productImg.src = productImages[i];
      productImg.addEventListener("click",onProductImgClick);
      productImgContainer.append(productImg);
    }
     var btn = document.createElement("button");
     btn.classList.add("button");
     btn.innerText = "Add to cart";
     btn.addEventListener("click", btnClick);
    
    detailsContainer.append(productName,brand,price,description,descText,
      productPreview,productImgContainer,btn);

    productImgContainer.childNodes[0].classList.add("active");
     var countImg;
function onProductImgClick(e) {
        previewImage.src = e.target.src;
        countImg = previewImage;
        console.log(countImg);
        var images = productImgContainer.childNodes;
        for (var i=0; i<images.length; i++) {
          images[i].classList.remove("active");
        }
        e.target.classList.add("active");

  
      }
 
      function btnClick() {
        var element = document.getElementById("count");
        var value = element.innerHTML;

        ++value;
        console.log(value);
        document.getElementById('count').innerHTML = value ;  
        var productList = window.localStorage.getItem('product-list');
        productList = productList === null || productList === '' ? [] : productList;
        productList = productList.length > 0 ? JSON.parse(productList) : [];

        console.log(productList);

        var foundAtPos = -1;
        for(var i=0; i < productList.length; i++) {
            if(parseInt(productList[i].id) == parseInt(currentObj.id)) {
                foundAtPos = i;
            }
        }

        if(foundAtPos > -1) {
            productList[foundAtPos].count = productList[foundAtPos].count + 1;
            console.log(productList[foundAtPos].count);
            window.localStorage.setItem('product-list', JSON.stringify(productList));
        } else {
            currentObj.count = 1;
            productList.push(currentObj);
            console.log(productList);
            window.localStorage.setItem('product-list', JSON.stringify(productList));

        }}
}

})

      

 





   
 


