import React, { Component } from 'react'
import '../styles/Scoreboard.css'

export class Scoreboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            score: 0
        }
    }

    handleVote() {
        if (this.state.score >= 0 && this.state.score < 10) {
            this.setState({
                score: this.state.score + 1
            })
        } else {
            alert('Cannot Vote More')
        }
    }

    handleUnvote() {
        if (this.state.score <= 10 && this.state.score > 0) {
            this.setState({
                score: this.state.score - 1
            })
        } else {
            alert('Cannot unvote')
        }
    }

    render() {

        let textScore = ''
        if (this.state.score === 0) {
            textScore = 'MIN'
        } else if (this.state.score === 10) {
            textScore = 'MAX'
        } else {
            textScore = this.state.score
        }

        return (
            <div className="score">
                <div className="vote-con">
                    <button className='vote-button' type='button' onClick={this.handleVote.bind(this)}>Click to Vote</button>
                </div>
                <div className="score-con">
                    <p>{textScore}</p>
                </div>
                <div className="unvote-con">
                    <button className='unvote-button' type='button' onClick={this.handleUnvote.bind(this)}>Click to Vote</button>
                </div>
            </div>
        )
    }
}

export default Scoreboard