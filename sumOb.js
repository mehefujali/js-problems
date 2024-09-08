const carts = {
      pant: {
            brand: "zara",
            price: 3443,
            quantity: 3,
      },
      shirt: {
            brand: "zara",
            price: 2443,
            quantity: 7,
      },
      shose: {
            brand: "nike",
            price: 5443,
            quantity: 3,
      },
      glass: {
            brand: "lenskart",
            price: 4000,
            quantity: 2,
      },
}
const carts2 = {
      pant: {
            brand: "sara",
            price: 34439,
            quantity: 3,
      },
      shirt: {
            brand: "sara",
            price: 24943,
            quantity: 3,
      },
      shose: {
            brand: "hike",
            price: 5943,
            quantity: 3,
      },
}
function getTotalPrice(carts) {
      let products = []
      let productPrice = 0;
      for (const cart in carts) {
            products.push(cart)
      }
      for (const product of products) {
            const total = carts[product].price * carts[product].quantity
            productPrice += total
      }
      return productPrice
}
function allPrice(carts, carts2) {
      let allPrice = []
      const cartsPrice = getTotalPrice(carts)
      const carts2Price = getTotalPrice(carts2)
      allPrice.push(cartsPrice)
      allPrice.push(carts2Price)
      return allPrice

}
const getPrices = allPrice(carts, carts2)
for (const getPrice of getPrices) {
      console.log(getPrice);

}
console.log(getPrices);


// carts1  ==> 33987 out put
// carts2  ==> 195975
