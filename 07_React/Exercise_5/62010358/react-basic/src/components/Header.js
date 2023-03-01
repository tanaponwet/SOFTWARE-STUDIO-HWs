import React, { Component } from 'react'
import '../styles/Header.css'

export class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                { type: 'อาหารคาว', name: 'ข้าวผัด', img: 'https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg' },
                { type: 'อาหารหวาน', name: 'บัวลอย', img: 'https://img.kapook.com/u/2022/wanwanat/1079595941.jpg' },
            ]
        }
    }

    onTrigger() {
        this.props.parentCallback(this.state.data)
    }

    componentDidMount() {
        this.onTrigger()
    }

    render() {
        return (
            <div className="header">
                <h1 className='title'>โหวตอาหาร</h1>
            </div>
        )
    }
}

export default Header