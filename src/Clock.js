import React from 'react';

function format(number){
    return number<10 ? "0"+number : number
}

function Clock({hours=0, minutes=10,seconds=1}) {
    hours = format(hours);
    minutes=format(minutes);
    seconds=format(seconds);
    return (
        <div className="clock">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    )
}

export default Clock;
