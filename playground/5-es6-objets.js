//Object property shorthand

const name = 'Praew'
const userAge = 21

const user = {
    //name: name,
    name, //shorthand syntax --> namee has to mtach up with the name
    age : userAge,
    location: 'Bangkok'
}

console.log(user)

const product ={
    label : 'red',
    price :3,
    stock:20
}

//const label = product.label
//const stock = product.stock

//destructuring --> เอาค่ามาทีเดียวเลย
const {label,stock,rating = 5} = product
console.log(label,stock)
console.log(rating)

//can use destructuring to rename
//const{label: productLabel} = product
//console.log(label)

const transaction = (type, {label,stock}) => {
    console.log(type, label,stock)
}

transaction('order', product)