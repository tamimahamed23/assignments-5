const kbds = document.getElementsByClassName('kbd');
console.log(kbds);

for (const kbd of kbds) {
    
   kbd.addEventListener("click", function (e) {
    e.target.style.backgroundColor ="green";
    e.target.style.color = "white";
     // Create a div element

      const innerText = e.target.innerText;
      const getPrice = document.getElementById("price").innerText;
      const parsIntPrice = parseInt(getPrice);
     const div = document.createElement("div");
     const p = document.createElement("p");
     p.innerText = innerText
     const span = document.createElement("span");
     span.innerText = "Economoy";
     const price = document.createElement("span");
     price.innerText =parsIntPrice;
     div.appendChild(p);
     div.appendChild(span);
     div.appendChild(price);
     div.style.display ="flex";
     div.style.justifyContent ="space-between";
     const getIdReturenDiv = document.getElementById("js-div");
     getIdReturenDiv.appendChild(div);

     const getTotalCost= document.getElementById("now-total").innerText;
     const parsIntTotalCost = parseInt(getTotalCost);
     const myTotalCost = parsIntTotalCost +parsIntPrice;
     document.getElementById("now-total").innerText = myTotalCost;

     const getGrandTotal = document.getElementById("gran-total").innerText;
     const parsIntGrandTotal = parseInt(getGrandTotal);
     const myGrandTotal = parsIntGrandTotal +parsIntPrice;
     document.getElementById("gran-total").innerText = myGrandTotal;


     


     
     const getSet = document.getElementById("sit").innerText;
     const parsIntSet = parseInt(getSet);
     const mySet = parsIntSet -1;
     document.getElementById("sit").innerText = mySet;
     const getAddSeat = document.getElementById("add-sit").innerText;
     const parsIntAddSeat = parseInt(getAddSeat);
     const myAddSeat = parsIntAddSeat +1;
     document.getElementById("add-sit").innerText = myAddSeat;    
    
               
    
   });
};



