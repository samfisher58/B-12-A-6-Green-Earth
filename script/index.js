const loadCategories =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
}
const displayCategories=(categories)=>{
    const categoriesContainer = document.getElementById("categories-container");
    categories.forEach(category => {
        console.log(category);
        const categoryBtn = document.createElement("div");
        categoryBtn.innerHTML =`
        <button class="btn btn-soft btn-accent text-black">${category.category_name}</button>
        `
        categoriesContainer.append(categoryBtn)
    });

    

};

loadCategories();