// class DocumentContext {
//   constructor() {
//     this.content = ""
//     this.state = new BlankState()
//   }

//   setState(state) {
//     this.state = state
//   }

//   write(text) {
//     this.state.write(this, text)
//   }
// }

// class BlankState {
//   write(documentContext, text) {
//     documentContext.content = text
//     documentContext.setState(new WithContentState())
//   }
// }

// class WithContentState {
//   write(documentContext, text) {
//     documentContext.content += " " + text
//   }
// }

// class ApprovedDocument {
//   write() {
//     console.log('Documento aprovado no permite modificaciones')
//   }
// }

// const doc = new DocumentContext()
// console.log(doc.state)
// doc.write("Hola")
// console.log(doc.content)
// console.log(doc.state)
// doc.write("Carolina")
// console.log(doc.content)
// console.log(doc.state)
// doc.setState(new ApprovedDocument())
// doc.write('Modifica')
// console.log(doc.content)
// console.log(doc.state)


