import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard';

class Pokedex extends Component{
    render(){
        let {isWinner} = this.props;
        let title='';
        if(isWinner){
            title=<h1 className='Pokedex-winner'>Winning Hand</h1>
        }else{
            title=<h1 className='Pokedex-loser'>Losing Hand</h1>
        }
        let PokeData = this.props.PokeData;
        
        return(
            <div className="Pokedex">
                {title}
                <h3>Total Experience : {this.props.exp}</h3>
                <div className="Pokedex-cards">
                {
                    PokeData.map(data=>{return <Pokecard pokemonData={data}/>})
                }
                </div>
                
            </div>
        )
    }
}
export default Pokedex;