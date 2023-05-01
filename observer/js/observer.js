class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notify(data) {
    this.observers.forEach((observer) => observer.refresh(data))
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }
}

// const sujeto = new Subject()
// const callbackObserver = (data) => div2.innerHTML = data.split("").reverse().join("")
// const callbackObserver2 = (data) => div1.innerHTML = data
// const observer1 = new Observer(callbackObserver)
// const observer2 = new Observer(callbackObserver2)

// sujeto.subscribe(observer1)
// sujeto.subscribe(observer2)

// const input = document.getElementById('myText')

// function change() {
//   sujeto.notify(input.value)
// }

// Esto es para que pueda heredar del Subject general
class ItemsSubject extends Subject {
  constructor() {
    super()
    this.data = {}
  }

  subscribeClient(product, name) {
    this.data[product] ? this.data[product].push(name) : this.data[product] = [name]
  }

  notify(product) {
    this.clients = this.data[product]
    this.observers.forEach((observer) => observer.refresh(this.clients))
  }
}

class SendEmailObserver {
  constructor(product) {
    this.product = product
  }

  refresh(data) {
    sendMails.innerHTML = 'Enviando Emails...' + " " + data
    console.log('Enviando Emails...', data)
  }
}

const itemsSubject = new ItemsSubject()
const sendEmailObserver = new SendEmailObserver()
itemsSubject.subscribe(sendEmailObserver)

function subscribe(product) {
  const input = document.getElementById('name') 
  const name = input.value
  itemsSubject.subscribeClient(product, name)
  input.value = ""
}

function deleteAllAvailableHeading() {
  const headings = document.getElementsByClassName('available')
  for (let i = 0; i < headings.length; i++) {
    headings[i].innerHTML = "";
  }
}

function addDisponibleHeading(name) {
  deleteAllAvailableHeading()
  document.getElementById(name).innerHTML = 'Disponible'
}

function notify() {
  const input = document.getElementById('product') 
  const product = input.value
  addDisponibleHeading(product)
  itemsSubject.notify(product)
  input.value = ""
}