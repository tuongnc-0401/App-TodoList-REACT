import React, {Component} from 'react';
import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';




class App extends Component {
  constructor(){
    super()
    this.state = {
      TodoItems : [
        {title: "Item 1", isComplete: false},
        {title: "Item 2123",isComplete: false},
        {title: "Item 3", isComplete: false}
       ]
    }


  }

  onClickItem(item, index){
   return ()=>{
    //   var newArray = this.state.TodoItems;
    // newArray[index].isComplete = !newArray[index].isComplete;
    const {TodoItems} = this.state;
    const isComplete= item.isComplete;
    this.setState(
      {
        TodoItems :[
          ...TodoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...TodoItems.slice(index + 1)
        ]
      }
    ) 
    }
     

  }

  render(){
    return (
      <div className="App">
        {
        
        this.state.TodoItems.length > 0 ? this.state.TodoItems.map((item, index) => <TodoItem key={index} item={item} onclickFunction={this.onClickItem(item,index)} />)  : 'Nothing item'  
  
        }
  
        
    
      </div>
    );
  }


  
}

export default App;
