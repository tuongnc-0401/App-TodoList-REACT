import React, {Component} from 'react';
import './App.css';
import './components/TodoItem'
import TodoItem from './components/TodoItem';
import classNames from 'classnames';

import img3 from './img/check_1.svg'



class App extends Component {
  constructor(){
    super()
    this.state = {
      currentFilter : "ALL",
      newItem :'',
      TodoItems : [
        {title: "Item 1", isComplete: false},
        {title: "Item 2123",isComplete: true},
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
        newItem:'',
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

  onKeyUp(event){
    if(event.keyCode === 13) {

      let txt = event.target.value
      txt = txt.trim();
      if (!txt) {
        return;
      }
      

      this.setState(
        {
          newItem:'',
          TodoItems: [
            { 
              title: txt ,
              isComplete: false
            },
            ...this.state.TodoItems
          ]
        }
      );
    }
  }

  onChange(event) {
    this.setState(
      {
        newItem: event.target.value
      }
    )
  }
 
  onClickAll = () => {
    let isComplete = !this.state.TodoItems[0].isComplete;
    let newArray = this.state.TodoItems;

    newArray.forEach(item => {
      item.isComplete = isComplete;
    });

    this.setState(
      {
        TodoItems : newArray
      }
    )

  }


  

  clickAll = () => {
    this.setState(
      {
        currentFilter : "ALL"
      }
    )
  }

  clickActive = () => {
    console.log("ACTIVE")
    this.setState(
      {
        currentFilter : "ACTIVE"
      }
    )
  }

  clickCOMPLETED = () => {
    this.setState(
      {
        currentFilter : "COMPLETED"
      }
    )
  }

  onDeleteOne(item, index){
    let updateArr = [...this.state.TodoItems.slice(0,index),...this.state.TodoItems.slice(index+1)];
  

    this.setState({
      TodoItems : updateArr
    });
  }

  clearAll= () =>{
    this.setState({
      TodoItems : []
    });
  }

  render(){
    var count = 0;
    this.state.TodoItems.forEach(element => {
      if (element.isComplete === false) {
        count++;
      }
    });
   

    return (
      <div className="App">
        <div className="Header">
          <img src={img3} height={32} width={32} onClick={() => this.onClickAll()} />
          <input 
            placeholder="Enter a task" 
            onKeyUp={(event)=> this.onKeyUp(event)}
            value={this.state.newItem}
            onChange={(event) => this.onChange(event)}
          ></input>
        </div>
        
      
        {        
        this.state.TodoItems.length > 0 ? this.state.TodoItems.map((item, index) => <TodoItem key={index} item={item} onclickFunction={this.onClickItem(item,index)} display={this.state.currentFilter} onDelete={() => this.onDeleteOne(item,index)} />)  : 'Nothing item'  
        }
  
        <div className="Footer">
           <div className="totalActive">
             {count} items left
           </div>
           <div className="filter">
              <div className={classNames({'selected': (this.state.currentFilter === 'ALL')} )} onClick={()=>this.clickAll()}>ALL</div>
              <div className={classNames({'selected': (this.state.currentFilter === 'ACTIVE')} )} onClick={()=>this.clickActive()}>Active</div>
              <div className={classNames({'selected': (this.state.currentFilter === 'COMPLETED')} )} onClick={() => this.clickCOMPLETED()}>Completed</div>
           </div>
           <div className="clear" onClick={()=> this.clearAll()}>
              Clear all
           </div>
        </div>
    
      </div>
    );
  }


  
}

export default App;
