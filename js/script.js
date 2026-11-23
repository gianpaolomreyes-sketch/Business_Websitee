var reviewForm = document.getElementById("reviewForm");

if (reviewForm) {
    reviewForm.addEventListener("submit", function() {

        var name = document.getElementById("reviewName").value;
        if(name=null){
            name="Anonymous";
        }
        var status = document.getElementById("reviewMessageStatus");

        status.textContent = "Thank you, " + name + "! Your review has been submitted.";

        /*For database things*/ 


        reviewForm.reset();
    });
}

/*Note to self https://www.dubberly.com/articles/starbucks-drink-platform.html nalang basis ng database*/
var menuItems = [
    {
        id: 1,
        name: "Regular Latte",
        category: "Espresso",
        description: "Classic combination of milk and espresso.",
        image: "../assets/Menu/Espresso/Latte.png",
        basePrice: 100,

        blueprint: {
            size: "Single",
            espressoShots: 1,
            milk: null,
            syrups: [],
            toppings: []
        },

        customization: {
            allowSizeChange: false,
            allowEspressoChange: true,
            allowMilkChange: false,
            allowSyrupChange: false,
            allowToppings: false
        }
    },

    {
        id: 2,
        name: "Espresso Macchiato",
        category: "Espresso",
        description: "A Latte but with some milk, and some milk foam.",
        image: "../assets/Menu/Espresso/Macchiato.png",
        basePrice: 120,

        blueprint: {
            size: "Single",
            espressoShots: 1,
            milk: "Whole Milk",
            syrups: [],
            toppings: ["Milk Foam"]
        },

        customization: {
            allowSizeChange: false,
            allowEspressoChange: true,
            allowMilkChange: true,
            allowSyrupChange: false,
            allowToppings: true
        }
    },

    {
        id: 3,
        name: "Cappucinno",
        category: "Espresso",
        description: "A Macchiato but with more milk, and some more milk foam.",
        image: "../assets/Menu/Espresso/Cappuccino.png",
        basePrice: 120,

        blueprint: {
            size: "Single",
            espressoShots: 1,
            milk: "Whole Milk",
            syrups: [],
            toppings: ["Milk Foam"]
        },

        customization: {
            allowSizeChange: false,
            allowEspressoChange: true,
            allowMilkChange: true,
            allowSyrupChange: false,
            allowToppings: true
        }
    }
];






var menuGrid = document.getElementById("menuGrid");

function displayMenuItems(items) {
    menuGrid.innerHTML = "";

    items.forEach(function(item) {

        var menuCard = document.createElement("div");
        menuCard.className = "menu-card";

        menuCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">

            <div class="menu-card-content">
                <p class="menu-card-category">${item.category}</p>

                <h3>${item.name}</h3>

                <p class="menu-card-description">
                    ${item.description}
                </p>

                <p class="menu-card-price">
                    ₱${item.basePrice.toFixed(2)}
                </p>

                <button class="btn view-drink" type="button">
                    View Drink
                </button>
            </div>
        `;

        menuGrid.appendChild(menuCard);
    });
}

displayMenuItems(menuItems);

menuGrid.addEventListener("click", function(event) {

    var button = event.target.closest(".view-drink");

    if (button) {
        alert("Drink customization will be available after database is established.");
    }

});