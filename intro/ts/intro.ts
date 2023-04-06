class DrinkTs {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  info(): string{
    return this.name
  }
}

const drinkTs = new DrinkTs('agua')
console.log(drinkTs.info())

interface Product {
  price: number
  getPrice(): string
}

// Herencia
class BeerTs extends DrinkTs implements Product {
  private alcohol: number
  price: number
  constructor(name: string, alcohol: number, price: number) {
    super(name)

    this.alcohol = alcohol
    this.price = price
  }

  getPrice(): string {
    return 'El precio' + this.price
  }

  info(): string {
    return super.info() + this.alcohol
  }
}

const beerTs = new BeerTs('cerveza', 4.8, 100)
console.log('herencia', beerTs.info())