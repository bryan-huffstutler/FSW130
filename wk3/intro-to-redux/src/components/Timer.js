import React, { useEffect } from "react"
import Button from '../components/Button'
import { timer, start, stop, lap, reset } from './TimerReducer'
import { useSelector, useDispatch } from 'react-redux'

function Timer() {
    const started = useSelector(state => state.started)
    const minutes = useSelector(state => state.minutes)
    const seconds = useSelector(state => state.seconds)
    const miliseconds = useSelector(state => state.miliseconds)
    const laps = useSelector(state => state.laps)
    const dispatch = useDispatch()

    useEffect(() => {
        if (started) {
            const startTimer = setInterval(() => { dispatch(timer()) }, 1);
            return () => clearInterval(startTimer);
        }
    });

    const lapData = laps.map( (lap, index) => (
        <div key={index}>
            Lap {index}: {lap.minutes}:{lap.seconds}.{lap.miliseconds}
        </div>

    ))

    return (
        <div className='timer'>
            <div className='time'>
                <div className='minutes'>
                    {minutes < 10 ? <>0{minutes}</> : minutes}:
                </div>
                <div className='seconds'>
                    {seconds < 10 ? <>0{seconds}</> : seconds}:
                </div>
                <div className='miliseconds'>
                    {miliseconds}
                </div>
            </div>
            <Button description="Start" onClick={() => { dispatch(start()) }} />
            <Button description="Stop" onClick={() => { dispatch(stop()) }} />
            <Button description="Lap" onClick={() => { dispatch(lap()) }} />
            <Button description="Reset" onClick={() => { dispatch(reset()) }} />
            <div >
                <h1 className='laps'>Laps:</h1>
              <h2 className='lapData'>  {lapData} </h2>
            </div>
        </div>
    )
}
export default Timer