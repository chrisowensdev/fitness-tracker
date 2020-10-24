import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../redux/actions';

const AddWorkout = ({addWorkout}) => {
    const [title, setTitle] = useState("");
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [reps, setReps] = useState(0);

    const _handleTitle = (input) => {
        setTitle( input );
    }

    const _handleMinutes = (input) => {
        setMinute( input );
    }

    const _handleSeconds = (input) => {
        setSecond( input );
    }

    const _handleReps = (input) => {
        setReps( input );
    }

    const _handleClick = () => {
        addWorkout(title, minute, second, reps);
        console.log("Title", title)
        console.log("Mins", minute)
        console.log("Secs", second)
        console.log("Reps", reps)
    }


    return (
        <>
        <input type="text" onChange={e => _handleTitle(e.target.value)} value={title}/>
        <input type="number" onChange={e => _handleMinutes(e.target.value)} value={minute}/>
        <input type="number" onChange={e => _handleSeconds(e.target.value)} value={second}/>
        <input type="number" onChange={e => _handleReps(e.target.value)} value={reps}/>
        <button type="button" onClick={_handleClick}>Submit</button>
        </>
    )
}

export default connect(null, { addWorkout })(AddWorkout);