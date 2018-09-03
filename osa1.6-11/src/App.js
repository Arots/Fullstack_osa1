import React from 'react';
import './index.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            arvosteluita: 0
        }
    }

        napinPainaus = (annettuState) => {
            return () => {
                this.setState({
                    [annettuState]: this.state[annettuState] +1,
                    arvosteluita: this.state.arvosteluita +1
                })
            }
        }

    render() {
        const keskiarvo = () => {
            return (this.state.hyva - this.state.huono)
        }

        const positiivisia = () => {
            return Number.parseFloat(this.state.hyva 
                / this.state.arvosteluita * 100).toFixed(2)
        }

        const Button = ({handleClick, palauteTeksti}) => {
            return (
                <button className="button" onClick={handleClick}>
                    {palauteTeksti}
                </button>
            )
        }

        const Statistics = ({hyva, neutraali, huono, keskiarvo, positiivisia}) => {
            return (
                <table className="statistiikka">
                    <tbody>
                        <Statistic otsikko="Hyvä" arvo={hyva}/>
                        <Statistic otsikko="Neutraali" arvo={neutraali}/>
                        <Statistic otsikko="Huono" arvo={huono}/>
                        <Statistic otsikko="Keskiarvo" arvo={keskiarvo}/>
                        <Statistic otsikko="Positiivisia" arvo={positiivisia} prosentti="%"/>
                    </tbody>
                </table>
            )
        }
        
        const Statistic = ({otsikko, arvo, prosentti}) => {
            return (
                <tr >
                    <td>{otsikko} </td>
                    <td>{arvo}</td>
                    <td>{prosentti}</td>
                </tr>
            )
        }

        const anecdotes = [
            'If it hurts, do it more often',
            'Adding manpower to a late software project makes it later!',
            'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
            'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            'Premature optimization is the root of all evil.',
            'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
        ]

        return (
            <div id="App"> <h1> Unicafe </h1>
                <h2>Anna palautetta </h2>
                <div>
                    <Button handleClick={ 
                        this.napinPainaus("hyva")} palauteTeksti="Hyvä" />
                    <Button handleClick={ 
                        this.napinPainaus("neutraali")} palauteTeksti="Neutraali" />
                    <Button handleClick={ 
                        this.napinPainaus("huono")} palauteTeksti="Huono" />
                </div>
                <h2>
                    Statistiikka
                </h2>
                {this.state.arvosteluita == 0 ? (
                    <div>Ei yhtään palautetta annettu</div>
                ) : (
                    <Statistics
                    hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono}
                    keskiarvo={keskiarvo()}
                    positiivisia={positiivisia()} />
                )}
                <br/>
                <br/>
                <div>
                    {anecdotes[Math.floor((Math.random() * 5) + 1)]}
                </div>
            </div>
        )
    }
}

export default App
