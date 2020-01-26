import React from 'react';
import Clock from "./Clock";

export default class RealTimeClock extends React.Component {
    state={
        time: new Date(),
        interval:null
    }

    componentDidMount(){
        if(!this.state.interval){
        const interval=setInterval(this.getCurrentTime,1000);
        this.setState({interval:interval});
        }
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
        this.setState({interval:null})
    }
    getCurrentTime=()=>{
       const time = new Date();
        this.setState({
            time:new Date()
        })
    }

    render() {
        return (
            <Clock hours={this.state.time.getHours()} minutes={this.state.time.getMinutes()} seconds={this.state.time.getSeconds()}></Clock>
        )
    }
}
