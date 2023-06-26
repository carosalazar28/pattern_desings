class Ball {
  constructor(canvasElement, canvas, ballSize) {
    this.canvasElement = canvasElement
    this.width = canvas.width
    this.height = canvas.height
    this.ballSize = ballSize
    this.positionX = 0
    this.positionY = 0
    this.state = new StateRight()
  }

  setState(state) {
    this.state = state
  }

  print() {
    this.state.print(this)
  }
}

class StateRight {
  print(ball) {
    ball.canvasElement.clearRect(0, 0, ball.width, ball.height)
    ball.canvasElement.fillRect(ball.positionX, ball.positionY, ball.ballSize, ball.ballSize)
    
    if (ball.positionX < (ball.width - ball.ballSize)) {
      ball.positionX += ball.ballSize
    } else {
      ball.setState(new StateDown())
    }
  }
}

class StateDown {
  print(ball) {
    ball.canvasElement.clearRect(0, 0, ball.width, ball.height)
    ball.canvasElement.fillRect(ball.positionX, ball.positionY, ball.ballSize, ball.ballSize)
    
    if (ball.positionY < (ball.height - ball.ballSize)) {
      ball.positionY += ball.ballSize
    } else {
      ball.setState(new StateLeft())
    }
  }
}

class StateLeft {
  print(ball) {
    ball.canvasElement.clearRect(0, 0, ball.width, ball.height)
    ball.canvasElement.fillRect(ball.positionX, ball.positionY, ball.ballSize, ball.ballSize)
    
    if (ball.positionX > 0) {
      ball.positionX -= ball.ballSize
    } else {
      ball.setState(new StateUp())
    }
  }
}

class StateUp {
  print(ball) {
    ball.canvasElement.clearRect(0, 0, ball.width, ball.height)
    ball.canvasElement.fillRect(ball.positionX, ball.positionY, ball.ballSize, ball.ballSize)
    
    if (ball.positionY > 0) {
      ball.positionY -= ball.ballSize
    } else {
      ball.setState(new StateRight())
    }
  }
}

const canvasElement = canvas.getContext('2d')
canvasElement.fillStyle = 'black'
const ball = new Ball(canvasElement, canvas, 10)
setInterval(() => ball.print(), 100)