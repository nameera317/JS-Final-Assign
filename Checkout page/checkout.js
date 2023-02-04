 var productList = window.localStorage.getItem('product-list');
productList = productList === null || productList === '' ? [] : productList;
productList = productList.length > 0 ? JSON.parse(productList) : [];


       var total=0;
       var k;
        var Lcontainer = document.getElementById("leftCont");
         for(var i=0; i<productList.length; i++){
            k =i;
        var card = document.createElement('div');
        card.classList.add('card');
        var div1 = document.createElement("div");
        var img = document.createElement('img');
        img.classList.add('img');
        img.src = productList[i].preview;
        div1.append(img);
        var div2 = document.createElement('div');
        var pName = document.createElement('h4');
        pName.classList.add('h4');
        pName.innerHTML = productList[i].name;
        var Count = document.createElement('p');
       Count.innerHTML = 'x2';
       Count.classList.add('size');
        var label = document.createElement('span');
        label.innerHTML = 'Amount: Rs ' + productList[i].price;
        total += productList[i].price;
        label.classList.add('price');
        div2.append(pName,Count,label)
        card.append(div1, div2);
        Lcontainer.append(card);
      }
    console.log(k+1)
    var Lcount = document.getElementById('totalCount');
        Lcount.innerText = k+1;

 var Rcontainer = document.getElementById('rightCont');
 var rCard = document.createElement('div');
 rCard.classList.add('rCard');
 var rhd = document.createElement('h1');
 rhd.classList.add('rh1');
 rhd.innerText = 'Total Amount';
 var rAmount = document.createElement('p');
 rAmount.classList.add('total');
 rAmount.innerText = 'Amount: Rs';
 var totalPrice = document.createElement('span');
 totalPrice.innerText = total;
rAmount.append(totalPrice);
 var btn = document.createElement('button');
 btn.addEventListener('click', onBtnClick);
 btn.classList.add('btn');
 btn.innerText = 'Place Order';
 rCard.append(rhd, rAmount, btn);
 Rcontainer.append(rCard);
    
 function onBtnClick() {
    window.location.href= '/confirmPage/confirm.html';
 }