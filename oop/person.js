const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName 
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {

    let bio = `${this.firstName} is ${this.age} and he lives in Kenya..`
    
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Andrew', 'Maed', '27', ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())

const Person2 = new Person('Kelvin', 'Nnamdi', '25')
console.log(Person2.getBio())