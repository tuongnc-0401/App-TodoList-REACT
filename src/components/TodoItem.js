import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkImg1 from '../img/tick.png'
class TodoItem extends Component {
    
    render() {
        const {item , onclickFunction } = this.props;
        // let className = "TodoItem";
        // if (item.isComplete){
        //     className += " TodoItem-complete";
        // }  
        let  url =checkImg;
        if (item.isComplete){
            url =checkImg1;
        } 
        return (
            <div  className={classNames('TodoItem',{'TodoItem-complete' : item.isComplete})}>
                <img onClick={onclickFunction} src={url} width={32} height={32} />
                <p> Hellooooo {item.title}</p>
                 {/* <img style={{ width: 50, height: 50 }} src="img1.jpg"/>  */}
            </div>
            
        );
    }
}
export default TodoItem;