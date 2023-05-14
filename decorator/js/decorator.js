// Entidad component
class ProductComponent {
  constructor(name) {
    this.name = name
  }

  getDetail() {
    return `${this.name}`
  }
}

// Entidad decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent
  }

  getDetail() {
    return this.productComponent.getDetail()
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent)
    this.tradename = tradename
    this.brand = brand
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`
  }
}

class PriceProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent)
    this.price = price
  }

  getDetail() {
    return `$${this.price} ${super.getDetail()}`
  }
}

class HtmlProductDecorator extends ProductDecorator {
  getDetail() {
    return `
      <h1>Información del producto</h1>
      <p>${super.getDetail()}</p>
    `
  }
}

const productComponent = new ProductComponent('HELADO')
console.log(productComponent.getDetail())

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'Colombia', 'Colombina')
console.log(commercialInfoProduct.getDetail())

const priceProduct = new PriceProductDecorator(productComponent, 2000)
console.log(priceProduct.getDetail())

const product = new PriceProductDecorator(commercialInfoProduct, 2000)
console.log(product.getDetail())

const htmlProduct = new HtmlProductDecorator(product)
myDiv.innerHTML = htmlProduct.getDetail()