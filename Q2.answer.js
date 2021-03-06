const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000} 
]

item.sort((a, b) => {
    return a.price - b.price
});

let cheapProduct = item[0]
let expensiveProduct = item[item.length - 1]

console.log(cheapProduct);
console.log(expensiveProduct);


const totalPrice = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price;    
    }

    return total;
}

console.log(totalPrice(item));

const totalPriceWithCondition = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= 10) {
            total += arr[i].price; 
        }   
    }

    return total;
}
console.log(totalPriceWithCondition(item));

console.log(`1.Cheap one (product): ${cheapProduct.name}, price: ${cheapProduct.price}$`)

console.log(`2.Expensive product: ${cheapProduct.name}, price: ${cheapProduct.price}$`);

console.log(`3. Full price of all products combined: ${totalPrice(item)}$`);

console.log(`4. the full price of all product combined removing product that are under the 10 dollar!: ${totalPriceWithCondition(item)}$`);
