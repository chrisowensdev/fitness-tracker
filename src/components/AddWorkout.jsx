import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../redux/actions';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
`;

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
        <Container>
        <label>Workout
            <input type="text" onChange={e => _handleTitle(e.target.value)} value={title}/>
        </label>
        <label>
            <input type="number" onChange={e => _handleMinutes(e.target.value)} value={minute}/>
        </label>
        <label>
            <input type="number" onChange={e => _handleSeconds(e.target.value)} value={second}/>
        </label>
        <label>Reps
            <input type="number" onChange={e => _handleReps(e.target.value)} value={reps}/>
        </label>
        
        <button type="button" onClick={_handleClick}>Submit</button>
        </Container>
    )
}

export default connect(null, { addWorkout })(AddWorkout);