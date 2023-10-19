// const getFibonacciSequence = (number) => {
//     let result = [0, 1]

//     for (let i = 2; i <= number; i++) {
//         result.push(result[i - 2] + result[i - 1])
//     }

//     for (let item of result) {
//         console.log(item)
//     }
// }

// getFibonacciSequence (10)


// const getFibonacciSequence = (number) => number <= 2 ? 1 : getFibonacciSequence(number -2) + getFibonacciSequence(number -1) 

// console.log(getFibonacciSequence(10))


const showName = function (arg) {
    return arg + ' name is ' + this.name

}
    const obj1 = {
        name: 'Alex',
        showName: showName
    }

    const obj2 = {
        name: 'Victor',
        showName: showName
    }

    const obj3 = {
    name: 'Vladimir',
    showName: showName
}

const bound = obj1.showName.bind(obj1)

console.log(obj1.showName.apply(obj3, [' Your ']))
console.log(obj1.showName.call(obj2, (' My ')))
console.log(bound (' His '))

