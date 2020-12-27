class Car {
  constructor({ maxSpeed, price }) {
    this._speed = 0
    this._maxSpeed = maxSpeed
    this._price = price
    this._isOn = false
    this._distance = 0
  }

  static getSpecs(car) {
    console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`)
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  turnOn() {
    this._isOn = true
  }

  turnOff() {
    this._isOn = false
    this._speed = 0
  }

  accelerate(value) {
    if (this._speed + value <= this._maxSpeed) {
      this._speed += value
      return null
    }
    this._speed = this._maxSpeed
  }

  decelerate(value) {
    if (this._speed - value >= 0) {
      this._speed -= value
      return null
    }
    this._speed = 0
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 })

mustang.turnOn()
mustang.accelerate(50)
mustang.drive(2)

Car.getSpecs(mustang)


mustang.decelerate(20)
mustang.drive(1)
mustang.turnOff()

Car.getSpecs(mustang)


console.log(mustang.price) 
mustang.price = 4000
console.log(mustang.price) 
