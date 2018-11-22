let Web3=require('web3')//引用web3库
let web3= new Web3(); //实例化 web3
web3.setProvider('http://localhost:7545')//设置网络
const address='0x622BBc96638039084aaA8B02e115E5146EE85F6A' //合约地址
const  api=[{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_str","type":"string"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_str","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

let instance=new web3.eth.Contract(api,address)//根据api和合约地址实例化合约
console.log(instance.options.address)
module.exports=instance //导出合约