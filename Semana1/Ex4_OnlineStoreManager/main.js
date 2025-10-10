import { products } from "./data.js";
import { DistinguishedProduct, Product } from "./models.js";
// import { DistinguishedProduct } from "./models";

// let [p1, p2, p3, producto4, producto5, producto6] = products;

// Product product1 = new Product(pro);
// console.log(products);

let productsInClass = [];

//4.1 Create instances
function instantiateClasses(products) {
  return products.map(
    ({ id, name, price, category, stock, levelOfPopularity }) => {
      if (levelOfPopularity != null) {
        return new DistinguishedProduct(
          id,
          name,
          price,
          category,
          stock,
          levelOfPopularity
        );
      } else {
        return new Product(id, name, price, category, stock);
      }
    }
  );
}

//4.2 Filter expensive prices and low stock
function filterProductsByPriceAndStock(productsInClass) {
    let EXPENSIVE_PRICE = 20;
    let MIN_STOCK = 10;
    return productsInClass.filter(({price, stock}) =>{

        let isPriceExpensive = false;
        let isStockLow = false;

        if(price > EXPENSIVE_PRICE) {
            isPriceExpensive = true;
        }

        if(stock < MIN_STOCK) {
            isStockLow = true;
        }

        return isPriceExpensive && isStockLow;

    })
}

//4.3 Find products by name
function findProductByName(productsInClass, searchedName) {
    return productsInClass.find(({name}) => {return name==searchedName});
}

//4.4 Calculate total stock
function calculateTotalStock(productsInClass) {

    return productsInClass.reduce((acc, {stock})=> {
       return acc+= stock;
    },0);
}

//4.5 Show General Information
function toStringProducts(productsInClass) {
    productsInClass.forEach(product => { console.log(product.toString);
    });
}

//6. function with rest parameter
function sumPricesOfProducts(...prices) {

    return prices.reduce((acc,price) => {
        return acc+=price;
    }, 0)

}

productsInClass = instantiateClasses(products);
console.log("Filter products: ",filterProductsByPriceAndStock(productsInClass));
console.log("Find product by name:",findProductByName(productsInClass, "Shirt"));
console.log("Find product by name:",findProductByName(productsInClass, "ni idea") == undefined ? "No existe el producto":findProductByName(productsInClass, "ni idea"));
console.log("Total Stock: ",calculateTotalStock(productsInClass));
console.log("Show templates literals:");

toStringProducts(productsInClass);
// console.log(toStringProducts(productsInClass));

//5 create new list with operator spread
let products_clone = [...products];
console.log("list cloned: ",products_clone);

console.log("Sum prices of all products: ",sumPricesOfProducts(...productsInClass.map(({price}) => {return price})));










// console.log(productsInClass);

// for (let index = 0; index < products.length; index++) {
//   const { id, name, price, category, stock, levelOfPopularity } =
//     products[index];

//   if (index == products.length - 1) {
//     productsInClass.push(
//       new DistinguishedProduct(
//         id,
//         name,
//         price,
//         category,
//         stock,
//         levelOfPopularity
//       )
//     );
//   } else {
//     productsInClass.push(new Product(id, name, price, category, stock));
//   }
// }
