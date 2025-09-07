
const loadCategories =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}

const removeActive=()=>{
  const categoryBtn = document.getElementsByClassName("category-btn");
  for(btn of categoryBtn){
    btn.classList.remove("active")
  }
  
}

const loadPlantByCategory = (id) =>{
  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    removeActive()
    const categoryClickBtn = document.getElementById(`category-btn-${id}`)
    categoryClickBtn.classList.add("active")
    displayPlants(data.plants)
  })
}

const loadAllTree =()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>{
      removeActive()
      const categoryBtnAllTree = document.getElementById("category-button-all-tree")
      categoryBtnAllTree.classList.add("active")
      displayPlants(data.plants)
    })
}

const loadPlantDetails=(id)=>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data=>displayPlantDetails(data.plants))
}

const displayPlantDetails =(plants)=>{
console.log(plants);
const plantDetails = document.getElementById("details-container")
plantDetails.innerHTML= `<div class="card bg-base-100 shadow-md">
  <div class="p-3 ">
    <img class="max-h-[400px] w-full"
      src="${plants.image}"
      alt=""
      class="rounded-xl" />
  </div>
  <div class="items-center">
     <h2 class="p-3">${plants.name}</h2> 
    <p class="p-3">${plants.description}</p>
    <div class="flex items-center justify-between p-3">
      <span class="bg-[#DCFCE7] rounded-3xl p-2" >${plants.category}</span>
      <span class="price font-semibold">৳${plants.price}</span>
    </div>
    
  </div>
</div>`
document.getElementById("plant_modal").showModal();

}


const displayPlants =(plants)=>{
    // console.log(plants)
    const plantContainer = document.getElementById("tree-container");
    plantContainer.innerHTML = ''
    
    plants.forEach(plant => {
        console.log(plant)
        const plantCard = document.createElement('div');
        plantCard.innerHTML = `<div class="card bg-base-100 shadow-md">
  <div class="p-3 ">
    <img class="max-h-[400px] w-full"
      src="${plant.image}"
      alt=""
      class="rounded-xl" />
  </div>
  <div class="items-center">
    <a href="#" onclick="loadPlantDetails(${plant.id})" class="p-3">${plant.name}</a> 
    <p class="p-3">${plant.description}</p>
    <div class="flex items-center justify-between p-3">
      <span class="bg-[#DCFCE7] rounded-3xl p-2" >${plant.category}</span>
      <span class="price font-semibold">৳ ${plant.price}</span>
    </div>
    <div class="p-3">
      <button class="btn bg-[#15803D] rounded-full w-full text-white cart-btn">Add to cart</button>
    </div>
  </div>
</div>
    
    `
    plantContainer.append(plantCard);
    });
    
}

const displayCategories=(categories)=>{
    const categoriesContainer = document.getElementById("categories-container");
    categories.forEach(category => {
        const categoryBtn = document.createElement("div");
        categoryBtn.innerHTML =`
        <button id="category-btn-${category.id}" onclick = "loadPlantByCategory('${category.id}')" class="btn btn-soft btn-accent text-black category-btn">${category.category_name}</button>
        `
        categoriesContainer.append(categoryBtn)
    });

    
};
loadCategories();
loadAllTree()