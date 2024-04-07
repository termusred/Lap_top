var filtered = tovarlar.filter((el) => {
    if(el.name == SecondFilter){
        document.getElementsByClassName("LaptopsPlace").innerHTML=(`<div class="card" style="width: 18rem">
        <img
          src=".."
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">${el.name}</p>
        </div>
      </div>`)
    }
})
