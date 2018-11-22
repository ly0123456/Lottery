let insatance =require('./03-instance')
const from ='0x102DBe519A77982Cb45368788BCC2AD58f2dc981'

let test= async ()=>{
    try {
        let value = await  insatance.methods.getValue().call(); //查询函数用call()
        console.log('value',value)
        await insatance.methods.setValue('hello HangTou').send({// 输入的用send send需要传参数 from ，如果转账的添加value字段
            from,
            value:0
        })

        let value1 = await insatance.methods.getValue().call();
        console.log('value1',value1)

    } catch (e) {
        console.log(e)
    }
}
test()//必须调用。。。。。。。。。。。。。。