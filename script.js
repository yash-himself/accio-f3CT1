

const url ="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
let promise =fetch(url)

promise.then((response)=>{
 return response.json()}

)
.then(data=>
    renderItems(data))
    .catch(err=>{
        console.log(err.message);
    })


function renderItems(data) {
    const itemBox = document.getElementById("menu")
    
    data.forEach(item => {
        let card = document.createElement("div")
        card.className="item"
        card.innerHTML=`
        <img src="${item.imgSrc}" alt="..">
        <p>${item.name}</p>
        <div class="btm">
            <span class="price">$ ${item.price}/-</span>
            <span class="add"> + </span>
        </div>`
        itemBox.appendChild(card);

    });

}
setTimeout(function(){
    alert("GetMenu have called")
    window.open("menu.html")

},3000)