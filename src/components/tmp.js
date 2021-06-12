const RED = 0;
const ORANGE= 1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.state = {
            CurrentColor : RED
        };

        setInterval(() => {
           this.setState({
               CurrentColor : this.getNextColor(this.state.CurrentColor)
           });
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
        return(
            <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {active : this.state.CurrentColor === RED})}></div>
                <div className={classNames('bulb', 'orange',{active : this.state.CurrentColor === ORANGE})}></div>
                <div className={classNames('bulb', 'green',{active : this.state.CurrentColor === GREEN})}></div>
            </div>
        );
    }
}