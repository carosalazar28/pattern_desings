// class Singleton {
//   constructor() {
//     console.log('Entrando al constructor')
//     if (Singleton.intance) {
//       console.log('Ya existe')
//       return Singleton.intance
//     }
//     console.log('no existe y se crea')
//     Singleton.intance = this
//   }
// }

// const singleton = new Singleton()
// const singleton2 = new Singleton()
class WeekDays {
  days = {
    es: [
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
      'domingo'
    ],
    en: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]
  }

  constructor(lang) {
    this.lang = lang

    if (WeekDays.instance) {
      return WeekDays.instance
    }
    WeekDays.instance = this
  }
  
  getDays() {
    return this.days[this.lang]
  }
}

const weekDays = new WeekDays('es')
console.log(weekDays.getDays())