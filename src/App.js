import React from 'react';
import './App.css';

import Timer from './components/Timer';
import AddWorkout from './components/AddWorkout';

function App() {
    return (
        <div className='App'>
            <Timer />
            <AddWorkout />
        </div>
    );
}

export default App;
