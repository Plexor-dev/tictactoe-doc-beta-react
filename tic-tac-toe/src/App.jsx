import { useState } from 'react'
import { Board } from './Board'
import './App.css'

function App() {

  return (
    <>
    <div className="App">
      <h1>Tic-tac-Toe</h1>
      <Board />
    </div>
    <div>
      <button className='reset' onClick={()=> location.reload()}>Reset</button>
    </div>
    <div className='links'>
      <h3><a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe">Tutorial tictactoe documentation beta React</a></h3>
      <h3><a href="https://github.com/Plexor-dev/tictactoe-doc-beta-react">GitHub Repository</a></h3>
      <p><span className='todo'>TODO: </span> better desing, reset button, history</p>
    </div>
    </>
  )
}

export default App
