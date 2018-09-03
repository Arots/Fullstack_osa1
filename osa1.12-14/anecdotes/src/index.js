import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [ 0, 0, 0, 0, 0 ],
      biggest: 0
    }
  }

  render() {
    const voteAnecdote = (selectedArvo) => {
        return () => {
          const listaKopio = [...this.state.pisteet]
          listaKopio[selectedArvo] += 1
          this.setState({
              pisteet: listaKopio
          })
          console.log(this.state.pisteet)
        }
    }

    const handleClick = () => {
        return () => {
            this.setState({
                selected: Math.floor(Math.random() * (anecdotes.length -1))
            })
        }
    }

    const mostVotes = () => Math.max(...this.state.pisteet)

    const popularAnecdote = () => this.state.pisteet.indexOf(mostVotes())

    return (
      <div>
          <h1>Onpas kivoja anekdootteja!</h1>
          <br/>
          <div id="anecdote">
            {this.props.anecdotes[this.state.selected]}
          </div>
          <br/>
          <div>This anecdote has: {this.state.pisteet[this.state.selected]} votes.</div>
          <br/>
          <div>
            <button type="button" className="button" 
                onClick={handleClick()}>Next anecdote</button>
            <button type="button" className="button" 
                onClick={voteAnecdote(this.state.selected)}>Vote for anecdote</button>
          </div>
          <br/>
          <br/>
          <div id="most">Anecdote with the most votes: </div>
          {this.props.anecdotes[popularAnecdote()]}
          <br/>
          <br/>
          <div>Has {mostVotes()} votes</div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
