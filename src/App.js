import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    order: ['tab1','tab2','tab3','tab4']
  }
  changeOrder(){

  }

  render() {
    const { order } = this.state
    return <div>
        { order.map((tab, i)=> <div key={i} className="tab" draggable="true" onDragStart={()=> console.log(i)} onDragEnter={()=>console.log(i)}>{tab} </div>)}
      </div>
  }
}
// { order.map((tab, i)=> <div key={i} className="tab" draggable="true" onDragEnter={this.dragenter} onDragStart={this.dragstart}>{tab4}</div>)}

export default App;
