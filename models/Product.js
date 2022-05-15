const conn = require('../database/conn')

class Product {
  constructor(name, price, description, imageUrl) {
    this.name = name
    this.price = price
    this.description = description
    this.imageUrl = imageUrl
  }

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
      imageUrl: this.imageUrl
    })

    return product
  }
}

module.exports = Product
