import React, { Component } from 'react'
import '../styles/MenuCard.css'
import Scoreboard from './Scoreboard'

export class MenuCard extends Component {
    render() {
        return (
            <div className="menu-card">
                <div className="info-con">
                    <div className="text-con">
                        <div className="food-type">
                            <h1>{this.props.type}</h1>
                        </div>
                        <div className="food-name">
                            <h3>{this.props.name}</h3>
                        </div>
                        <div className="food-desc">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, id? Pariatur minus magnam autem accusantium impedit velit ad labore a similique architecto at dolorum laborum sint dolorem nulla fugit accusamus adipisci dolores deserunt, vitae consequatur fugiat minima. Explicabo quod at nisi corrupti beatae magnam id maiores suscipit aut atque in inventore quis praesentium nulla, odit fugiat voluptatibus veniam labore molestiae.</p>
                        </div>
                    </div>
                    <figure className="img-con">
                        <img src={this.props.img} alt="" />
                    </figure>
                </div>
                <div className="vote-score">
                    <Scoreboard />
                </div>
            </div>
        )
    }
}

export default MenuCard