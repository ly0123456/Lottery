import React, {Component} from 'react';
import CardExampleCard from "./display/ui";

let web3 = require('./utils/initWeb3')
let lotteryinstance = require('./eth/lotteryinstance')

class App extends Component {
    constructor() {
        super()
        this.state = {
            manger: '',
            round: 0,
            winner: '',
            playerCount: 0,
            balance: 0,
            currentAccount: '',
            isShowButten:'',
            isClick:''
        }
    }
    play= async()=>{
        try {
            this.setState({isClick:true})

            let accounts = await web3.eth.getAccounts()
            await lotteryinstance.methods.play().send({
                from: accounts[0],
                value: 1 * 10 ** 18,
            })
            this.setState({isClick:false})
            alert('投注成功')
            window.location.reload(true)
        } catch (e) {
            this.setState({isClick:false})

            alert('投注失败')
            console.log(e)
        }
    }
    kaijiang= async()=>{
        try {
            this.setState({isClick:true})
            let accounts = await web3.eth.getAccounts()
            await lotteryinstance.methods.kaijiang().send({
                from: accounts[0],
            })
            let winner = await lotteryinstance.methods.winner().call()
            alert(`上期获奖地址: ${winner} `)
            this.setState({isClick:false})

            alert('开奖成功')
            window.location.reload(true)
        } catch (e) {
            this.setState({isClick:false})
            alert('开奖失败')
            console.log(e)
        }
    }
    tuijiang= async()=>{
        try {
            this.setState({isClick:true})
            let accounts = await web3.eth.getAccounts()
            await lotteryinstance.methods.play().tuijiang({
                from: accounts[0],
            })
            this.setState({isClick:true})
            alert('退奖成功')
            window.location.reload(false)
        } catch (e) {
            this.setState({isClick:false})

            alert('退奖失败')
            console.log(e)
        }
    }



    async componentWillMount() {
        let accounts = await web3.eth.getAccounts()
        let manger = await lotteryinstance.methods.manger().call()
        let round = await lotteryinstance.methods.round().call()
        let winner = await lotteryinstance.methods.winner().call()
        let playerCount = await lotteryinstance.methods.getlength().call()
        let balanceWei = await lotteryinstance.methods.getbalance().call()
        let balance = web3.utils.fromWei(balanceWei, 'ether')
        this.setState({
            manger,
            round,
            winner,
            playerCount,
            balance,
            currentAccount: accounts[0],
            isShowButten: accounts[0] === manger ? 'inline' : 'none'
        })
    }

    render() {
        return (
            <div>
                <CardExampleCard
                    manger={this.state.manger}
                    round={this.state.round}
                    winner={this.state.winner}
                    balance={this.state.balance}
                    playerCount={this.state.playerCount}
                    currentAccount={this.state.currentAccount}
                    isShowButten={this.state.isShowButten}
                    isClick={this.state.isClick}
                    play={this.play}
                    kaijiang={this.kaijiang}
                    tuijiang={this.tuijiang}
                />
            </div>
        );
    }
}

export default App;
