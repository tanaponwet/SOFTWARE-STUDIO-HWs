import React, { Component } from 'react'
import './App.css';
import MenuCard from './components/MenuCard';
import Header from './components/Header';

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      foodData: []
    }
  }

  handleCallback(childData) {
    this.setState({ foodData: [...this.state.foodData, ...childData] })
  }

  render() {
    return (
      <div className="app">
        <Header parentCallback={this.handleCallback.bind(this)} />
        <div className="card-con">
          <div className="card-list">
            {this.state.foodData.map((element, index) => {
              return <MenuCard type={element.type} name={element.name} img={element.img} key={index} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App
