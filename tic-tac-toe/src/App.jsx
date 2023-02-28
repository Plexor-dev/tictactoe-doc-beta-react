import { useState } from 'react'
import { Board } from './Board'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Tic-tac-Toe</h1>
      <Board />
      <h3><a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe">Tutorial tictactoe documentation beta react</a></h3>
      <h3><a href="https://github.com/Plexor-dev/tictactoe-doc-beta-react">Git-hub Repository</a></h3>
    </div>
  )
}

export default App
