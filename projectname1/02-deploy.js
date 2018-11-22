/*
let {bytecode,interface}=require('./01-compile')
//console.log(bytecode)
//console.log(interface)


let Web3=require('web3')
let web3 =new Web3();
web3.setProvider('HTTP://127.0.0.1:7545')

console.log('version',web3.version)
console.log(web3.currentProvider)
const acount='0x0dDbb6E1e72D1Fe8b2903011A2541869C105e1A8'

let constract =new web3.eth.Contract(JSON.parse(interface))
constract.deploy({
    data:bytecode,
}).send({
    from:acount,
    gas:'3000000'
}).then(instance=>{
    console.log('address',instance.options.address)
})*/
let {bytecode, interface} = require('./01-compile')

// console.log(bytecode)
console.log(interface)

//1. 引入web3

let Web3 = require('web3')//引入web3
//2. new 一个web3实例
let web3 = new Web3()
//3. 设置网络

web3.setProvider('http://localhost:7545')

const account = '0x0dDbb6E1e72D1Fe8b2903011A2541869C105e1A8'

console.log('version :', web3.version)
// console.log(web3.currentProvider)

//1. 拼接合约数据 interface
let contract = new web3.eth.Contract(JSON.parse(interface))

//2. 拼接bytecode
contract.deploy({
    data: bytecode, //合约的bytecode
    arguments: ['HelloWorld'] //给构造函数传递参数，使用数组
}).send({
    from: account,
    gas: '3000000', //不要用默认值，一定要写大一些， 要使用单引号
    //gasPrice: '1',
}).then(instance => {
    console.log('address :', instance.options.address)
})

