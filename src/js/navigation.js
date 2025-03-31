document.addEventListener("DOMContentLoaded", () => {
    // Fetch the exact categories from the JSON file
    fetch('src/data/categories.json')
        .then(response => { 
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        })
        .then(categories => {
            const categoryNav = document.getElementById("category-nav");
            const categoryList = document.getElementById("category-list");

            // Clear any existing content
            categoryNav.innerHTML = '';
            categoryList.innerHTML = '';

            // Render navigation list items for all categories.
            categories.forEach(category => {
                const navItem = document.createElement("li");
                navItem.textContent = category.name;
                navItem.addEventListener("click", () => {
                    window.location.href = `product.html?section=main&item=${encodeURIComponent(category.name)}`;
                });
                categoryNav.appendChild(navItem);

                // Render category cards for all categories.
                const categoryCard = document.createElement("div");
                categoryCard.className = "category-card";
                categoryCard.innerHTML = `
                    <img src="${category.image}" alt="${category.name}">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                `;
                categoryCard.addEventListener("click", () => {
                    window.location.href = `product.html?section=main&item=${encodeURIComponent(category.name)}`;
                });
                categoryList.appendChild(categoryCard);
            });
        })
        .catch(error => {
            console.error('Error loading categories:', error);
            document.getElementById("category-list").innerHTML = `
                <div class="error-message">
                    <h3>Sorry, we couldn’t load the categories</h3>
                    <p>Please try refreshing the page</p>
                </div>
            `;
        });
});
