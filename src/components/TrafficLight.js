import React, {Component} from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 1;
const ORANGE = 2;
const GREEN = 3;

class TrafficLight extends Component{


    constructor(){
        super();
        this.state = {
            currentColor : RED
        }


        setInterval(()=>{
            console.log(this.state.currentColor)
            this.setState(
                {
                    currentColor : this.getNextColor(this.state.currentColor)
                }
            )
        },1000);
         
    }

    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
           

    }

    render() {
        let classNameGreen = "bulb green";
        if(this.state.currentColor === GREEN){
            classNameGreen +=" active"
        }
        return(            
            <div className="TrafficLight">                
                <div className={classNames('bulb', 'red',{ active : this.state.currentColor === RED})}></div>
                <div className={classNames('bulb', 'orange',{active: this.state.currentColor === ORANGE})}></div>           
                <div className={classNameGreen}></div>
            </div>
        );

        
    };
}

export default TrafficLight;