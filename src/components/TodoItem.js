import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkImg1 from '../img/tick.png';
import cancelImg from '../img/cancel.svg'
class TodoItem extends Component {
    
    render() {
        const {item , onclickFunction, display, onDelete } = this.props;
        // let className = "TodoItem";
        // if (item.isComplete){
        //     className += " TodoItem-complete";
        // }  
        let  url =checkImg;
        if (item.isComplete){
            url =checkImg1;
        } 
        
        if (display === 'ACTIVE') {
            var flagActive = true;
        }
        if (display === 'COMPLETED') {
            var flagCom = true;
        }
        return (
            <div  className={classNames('TodoItem',{'TodoItem-complete' : item.isComplete}, {'notShow' : (item.isComplete) && (flagActive)}, {'notShow' : (!item.isComplete) && (flagCom)} )}>
                <img onClick={onclickFunction} src={url} width={32} height={32} />
                <p>  {item.title}</p>
                 {/* <img style={{ width: 50, height: 50 }} src="img1.jpg"/>  */}
                 <img onClick={onDelete} src={cancelImg} width={32} height={32}  className="cancelBtn"/>
            </div>
            
        );
    }
}
export default TodoItem;