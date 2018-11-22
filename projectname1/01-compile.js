let solc =require('solc')

    let fs = require('fs')

   const soure =fs.readFileSync('./constructs/construct.sol','utf-8')
       const  output=solc.compile(soure,1)
    //console.log(output)


module.exports=output['contracts'][':Test']//导出abi 和二进制码
