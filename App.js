import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //state = {
    //turn: ['','','','']
  //}


isbefore(a, b) {
    if (a.parentNode == b.parentNode) {
        for (const cur = a; cur; cur = cur.previousSibling) {
            if (cur === b) {
                return true;
            }
        }
    }
    return false;
}

dragenter(e) {
    const targetelem = e.target;
    if (targetelem.nodeName == "TD") {
       targetelem = targetelem.parentNode;
    }

    if (isbefore(source, targetelem)) {
        targetelem.parentNode.insertBefore(source, targetelem);
    } else {
        targetelem.parentNode.insertBefore(source, targetelem.nextSibling);
    }
}

dragstart(e) {
    const source = e.target;
    e.dataTransfer.effectAllowed = 'move';
}


  render() {
    return (
      <div >

        <div className="tab" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)">>tab1</div>
        <div className="tab" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)">>tab2</div>
        <div className="tab" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)">>tab3</div>
        <div className="tab" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)">>tab4</div>


      </div>
    );
  }
}

export default App;
