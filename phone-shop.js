const phones = [
      {
            brand: 'apple',
            price: 45999,
            camera: 12,
            quantity: 3,
      },
      {
            brand: 'samsung',
            price: 110000,
            camera: 12,
            quantity: 3,
      },
      {
            brand: 'xaomi',
            price: 10999,
            camera: 12,
            quantity: 3,
      },
      {
            brand: 'readmi',
            price: 9699,
            camera: 12,
            quantity: 3,
      },
      {
            brand: 'realme',
            price: 18000,
            camera: 12,
            quantity: 3,
      },
      {
            brand: 'infinex',
            price: 180000,
            camera: 12,
            quantity: 3,
      },
      {
            brand: 'ikall',
            price: 280000,
            camera: 12,
            quantity: 3,
      },

]

function getExpansivePhone(phones) {
      let expansivePhoneis = phones[0]
      for (const phone of phones) {
            if (phone.price > expansivePhoneis.price) {
                  expansivePhoneis = phone
            }

      }
      return expansivePhoneis;

}

const expansivePhone = getExpansivePhone(phones)
console.log(expansivePhone);
