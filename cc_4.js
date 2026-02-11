// Step 2: Creating an Array

let products = [
    {Name: "Brownie Computer", Category: "electronics", Price: 299.99, Inventory: 50},
    {Name: "Water", Category: "groceries", Price: 1.99, Inventory: 150},
    {Name: "Double Chocolate Chunk Brownie", Category: "groceries", Price: 3.99, Inventory: 80},
    {Name: "I Love Brownies Shirt", Category: "Apparel", Price: 15.99, Inventory: 100},
    {Name: "Parchment Paper", Category: "household", Price: 10.99, Inventory: 200},
]


// Step 3: Write a for...of loop

for (let product of products) {

    let discount = 0;

// Creating switch statements for category discounts

    switch (products.Category) {
        case "electronics":
            discount = 0.20;
            break;

        case "apparel":
            discount = 0.15;
            break;

        case "groceries":
            discount = 0.10;
            break;

        case "household":
            discount = 0.10;
            break;
    
        default:
            break;
    }
    
    product.discountedPrice = (product.price * (1-discount)).toFixed(2);
}

// Step 4: Create customerType Variable and Write if...else chain

let customerType = "student"

if (customerType = "student") {
    extraDiscount = 0.05
    console.log("You get an extra 5% off for being a student!")
} else if (customerType = "senior") {
    extraDiscount = 0.07
    console.log("You get an extra 7% off for being a senior!")
} else {
    extraDiscount = 0
    
}