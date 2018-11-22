import React from 'react'
import { Card, Icon, Image ,Statistic,Button} from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card>
        <Image src='/images/logo.jpg' />
        <Card.Content>
            <Card.Header>黑马福利彩票（航头站）</Card.Header>
            <Card.Meta>
                <p>管理员地址：{props.manger}</p>
                <p>当前地址：{props.currentAccount}</p>
                <p>上期获奖地址 {props.winner}</p>
            </Card.Meta>
            <Card.Description>每晚八点准时开奖，敬请等待</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                {props.playerCount} 人参与
            </a>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='red'>
                <Statistic.Value>{props.balance}ETH</Statistic.Value>
                <Statistic.Label>奖金池</Statistic.Label>
            </Statistic>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='blue'>
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <a href='#'>点击我查看交易历史</a>
            </Statistic>
        </Card.Content>
        <Button animated='fade' onClick={props.play} disabled={props.isClick}>
            <Button.Content visible>购买产生希望</Button.Content>
            <Button.Content hidden>投注放飞梦想</Button.Content>
        </Button>
        <Button basic color='red' style={{display : props.isShowButten}} onClick={props.kaijiang}  disabled={props.isClick}>
            开奖
        </Button>
        <Button basic color='orange' style={{display : props.isShowButten}} onClick={props.tujiang}  disabled={props.isClick}>
            退奖
        </Button>
    </Card>
)

export default CardExampleCard