const loadCategories = () => {
  manageSpinner(true)
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const removeActive = () => {
  const categoryBtn = document.getElementsByClassName("category-btn");
  for (btn of categoryBtn) {
    btn.classList.remove("active");
  }
};

const loadPlantByCategory = (id) => {
  manageSpinner(true)
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const categoryClickBtn = document.getElementById(`category-btn-${id}`);
      categoryClickBtn.classList.add("active");
      displayPlants(data.plants);
    });
};

const loadAllTree = () => {
  manageSpinner(true)
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const categoryBtnAllTree = document.getElementById(
        "category-button-all-tree"
      );
      categoryBtnAllTree.classList.add("active");
      displayPlants(data.plants);
    });
};

const loadPlantDetails = (id) => {
  manageSpinner(true)
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlantDetails(data.plants));
};

const manageSpinner=(status)=>{
  if(status == true){
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("tree-container-all").classList.add("hidden");  
  }else{
    document.getElementById("tree-container-all").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden"); 
  }
}

const displayPlantDetails = (plants) => {
  
  const plantDetails = document.getElementById("details-container");
  plantDetails.innerHTML = `<div class="card bg-base-100 shadow-md">
  <div class="p-3 ">
    <img class="max-h-[400px] w-full"
      src="${plants.image}"
      alt=""
      class="rounded-xl" />
  </div>
  <div class="items-center">
     <h2 class="p-3 font-bold text-xl">${plants.name}</h2> 
    <p class="p-3">${plants.description}</p>
    <div class="flex items-center justify-between p-3">
      <span class="bg-[#DCFCE7] rounded-3xl p-2" >${plants.category}</span>
      <span class="price font-semibold">৳${plants.price}</span>
    </div>
    
  </div>
</div>`;
  document.getElementById("plant_modal").showModal();
  manageSpinner(false)
};

const displayPlants = (plants) => {
  const plantContainer = document.getElementById("tree-container");
  plantContainer.innerHTML = "";

  plants.forEach((plant) => {
    
    const plantCard = document.createElement("div");
    plantCard.innerHTML = `<div class="card bg-base-100 shadow-md">
  <div class="p-3 ">
    <img class="max-h-[400px] w-full"
      src="${plant.image}"
      alt=""
      class="rounded-xl" />
  </div>
  <div class="items-center">
    <a href="#" onclick="loadPlantDetails(${plant.id})" class="p-3 font-bold text-xl">${plant.name}</a> 
    <p class="p-3">${plant.description}</p>
    <div class="flex items-center justify-between p-3">
      <span class="bg-[#DCFCE7] rounded-3xl p-2" >${plant.category}</span>
      <p class="price font-semibold"><span>৳</span> ${plant.price}</p>
    </div>
    <div class="p-3">
      <button class="btn bg-[#15803D] rounded-full w-full text-white cart-btn">Add to cart</button>
    </div>
  </div>
</div>
    
    `;
    plantContainer.append(plantCard);
  });
  manageSpinner(false)
};
// cart history section
document
    .getElementById("tree-container")
    .addEventListener("click", function(e) {
      if (e.target.className.includes("cart-btn")) {
        
        const button = e.target;
        const plantName =button.parentNode.parentNode.children[0].innerText;
        const plantPrice =
         parseInt(button.parentNode.parentNode.children[2].children[1].innerText.replace("৳","").trim())         
        const cartContainer = document.getElementById("cart-container");
        const newCartList = document.createElement("div");
        newCartList.innerHTML = `
         <div id="cart-product-box"  class= "bg-[#EAF4ED] p-2 flex items-center justify-between">
         <div>
          <h2>${plantName}</h2>
        <span>
         ${plantPrice}
        </span>
        <span>
          *
        </span>
        <span class="qty">
          1
        </span></div>
       <button class= "cart-clr-btn"> ❌ </button>
      </div>
      `;      
        cartContainer.append(newCartList); 
       
        alert(`${plantName} ৳${plantPrice} is being added to your cart!`);         
        const totalPrice = document.getElementById("total-price").innerText;
        const currentTotal = Number(plantPrice) + Number(totalPrice)
        document.getElementById("total-price").innerText = currentTotal;
        
        // history clear section
      }


    });

// // history clear section
    document
          .getElementById("cart-container")
          .addEventListener("click", function (e) {
            if (e.target.className.includes("cart-clr-btn")) {
              const clrBtn = e.target;
              const totalPrice = document.getElementById("total-price").innerText;
              const plantPrice = clrBtn.parentNode.children[0].children[1].innerText
              const currentTotal = Number(totalPrice) - Number(plantPrice)
              document.getElementById("total-price").innerText = currentTotal;
              console.log(totalPrice)

              const cartHistorySection = clrBtn.parentNode;
              cartHistorySection.innerHTML = "";
              cartHistorySection.style.display = "none";
            }
          });

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((category) => {
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
        <button id="category-btn-${category.id}" onclick = "loadPlantByCategory('${category.id}')" class="btn btn-soft btn-accent text-black category-btn">${category.category_name}</button>
        `;
    categoriesContainer.append(categoryBtn);
  });
  manageSpinner(false)
};
loadCategories();
loadAllTree();
