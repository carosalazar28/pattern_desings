class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder
  }

  encode(str) {
    return this.encoder.encode(str)
  }

  decode(str) {
    return this.encoder.decode(str)
  }
}

class Base64Enconder {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)))
  }

  decode(str) {
    return decodeURIComponent(unescape(window.atob(str)))
  }
}

class HTMLEncoderImplementation {
  encode(str) {
    return str.split(".").reduce((acc, e) => {
      return acc + `<p>${e.trim()}</p>`
    }, "")
  }

  decode(str) {
    return str.split("</p>").reduce((acc, e) => {
      return e !== ""
            ? acc + e.replace("<p>", "") + ". "
            : acc + ""
    }, "")
  }
}

const base64Encoder = new Base64Enconder()
const encoder = new EncoderTextAbstraction(base64Encoder)
console.log(encoder.encode("pato"))
console.log(encoder.decode("cGF0bw=="))

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementation())
console.log(encoder2.encode("text. un poco largo.si"))
console.log(encoder2.decode("<p>text</p><p>un poco largo</p><p>si</p>"))