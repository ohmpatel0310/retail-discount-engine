// Step 2: Creating an Array

let products = [
    {Name: "Brownie Computer", Category: "electronics", Price: 299.99, Inventory: 50},
    {Name: "Water", Category: "groceries", Price: 1.99, Inventory: 150},
    {Name: "Double Chocolate Chunk Brownie", Category: "groceries", Price: 3.99, Inventory: 80},
    {Name: "I Love Brownies Shirt", Category: "apparel", Price: 15.99, Inventory: 100},
    {Name: "Parchment Paper", Category: "household", Price: 10.99, Inventory: 200},
]


// Step 3: Write a for...of loop

for (let product of products) {

    let categoryDiscount = 0;

// Creating switch statements for category discounts

    switch (product.Category) {
        case "electronics":
            categoryDiscount = 0.20;
            break;

        case "apparel":
            categoryDiscount = 0.15;
            break;

        case "groceries":
            categoryDiscount = 0.10;
            break;

        case "household":
            categoryDiscount = 0.10;
            break;
    
        default:
            break;
    }
    
    product.categoryDiscountRate = categoryDiscount
    product.categoryDiscountedPrice = (product.Price * (1-categoryDiscount)).toFixed(2);
}

// Step 4: Create customerType Variable and Write if...else chain

let extraDiscount = 0
let customerType = "student"

if (customerType === "student") {
    extraDiscount = 0.05
    console.log("You get an extra 5% off for being a student!")
} else if (customerType === "senior") {
    extraDiscount = 0.07
    console.log("You get an extra 7% off for being a senior!")
} else {
    extraDiscount = 0
    
}

// Step 5: Using for or while Loops to Simulate Checkout

for (let customer = 1; customer <= 3; customer++) {

    let total = 0;
    // console.log(`${customer}`);


    for (const product of products) {

        if (product.Inventory > 0) {
            let priceAfterCategory = product.Price * (1-(product.categoryDiscountRate))

            let itemFinalPrice = priceAfterCategory *(1-(extraDiscount))
            total += itemFinalPrice
            
            --product.Inventory

            //console.log(`${product.Name}: $${itemFinalPrice.toFixed(2)} (Inventory left: ${product.Inventory})`)
       
    }
}

console.log(`Final Total for Customer ${customer}: $${total.toFixed(2)}`);

}

// Step 6: Using for...in loops to Log Single Products

console.log("")
console.log("Product Details")
console.log("")

let sampleProduct = products[2]

for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`)
}

let finalPrice = sampleProduct.Price * (1-sampleProduct.categoryDiscountRate) * (1-extraDiscount)
console.log(`Customer Discount: ${(extraDiscount.toFixed(0))}%`)
console.log(`Final Price after all Discounts: $${finalPrice.toFixed(2)}`)

// Step 7: Use Object.entries to Log All Product Info

console.log("")
console.log("All Products after Checkout")

for (const product of products) {

    console.log("")
    console.log("Product:")

    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`)
        
    }

    let finalPrice = product.Price * (1-product.categoryDiscountRate) * (1-extraDiscount)
    console.log(`Customer Discount: ${(extraDiscount*100).toFixed(0)}%`)
    console.log(`Final Price after All Discounts: $${finalPrice.toFixed(2)}`)

}