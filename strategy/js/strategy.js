// class SaleContext {
//   constructor(strategy) {
//     this.strategy = strategy
//   }

//   // Para dejar el contexto extensible y que se puedan setear las estrategias debo:
//   setStrategy(strategy) {
//     this.strategy = strategy
//   }

//   calculate(amount) {
//     return this.strategy.calculate(amount)
//   }
// }

// class RegularSaleStrategy {
//   constructor(tax) {
//     this.tax = tax
//   }

//   calculate(amount) {
//     return amount + (this.tax * amount)
//   }
// }

// class SaleWithDiscountStrategy {
//   constructor(tax, discount) {
//     this.tax = tax
//     this.discount = discount
//   }

//   calculate(amount) {
//     return amount + (this.tax * amount) - (amount * this.discount)
//   }
// }

// // Primero vamos a crear un objeto con el impuesto de vamos a pasar
// const saleWithIva = new RegularSaleStrategy(0.16)
// const sale = new SaleContext(saleWithIva)
// console.log('SALE', sale.calculate(200))

// // Ahora creamos el nuevo objeto de estrategia
// const saleWithDiscount = new SaleWithDiscountStrategy(0.16, 0.2)
// sale.setStrategy(saleWithDiscount)
// console.log('SALE 2', sale.calculate(200))

const data = [
  {
    name:"bulbasaur",
    url:"https://pokeapi.co/api/v2/pokemon/1/",
    detail: "Lorem isup dede dedede dedee"
  },
  {
    name:"ivysaur",
    url:"https://pokeapi.co/api/v2/pokemon/2/",
    detail: "Lorem isup dede dedede dedee"
  },
  {
    name:"venusaur",
    url:"https://pokeapi.co/api/v2/pokemon/3/",
    detail: "Lorem isup dede dedede dedee"
  },
  {
    name:"charmander",
    url:"https://pokeapi.co/api/v2/pokemon/4/",
    detail: "Lorem isup dede dedede dedee"
  }
]

class PokemonContext {
  constructor(strategy, data, element) {
    this.strategy = strategy
    this.data = data
    this.element = element
  }

  // Para dejar el contexto extensible y que se puedan setear las estrategias debo:
  setStrategy(strategy) {
    this.strategy = strategy
  }

  show() {
    return this.strategy.show(this.data, this.element)
  }
}

class ListRenderStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, elem) => {
      return acc + `
          <div>
            <h1>${elem.name}</h1>
            <p>${elem.url}</p>
            <hr/>
          </div>
        `
    }, '')
  }
}

class DetailRenderStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, elem) => {
      return acc + `
          <div>
            <h1>${elem.name}</h1>
            <p>${elem.detail}</p>
            <hr/>
          </div>
        `
    }, '')
  }
}

const strategies = [
  new ListRenderStrategy(),
  new DetailRenderStrategy()
]

const container = document.getElementById('container')

const pokemon = new PokemonContext(strategies[0], data, container)
pokemon.show()

const selection = document.getElementById('selection')
selection.addEventListener('change', (event) => {
  const option = event.target.value
  pokemon.setStrategy(strategies[option])
  pokemon.show()
})