import React, { Component } from 'react'
import Pokedex from './Pokedex'
import Pokemondata from './Pokemondata';
import './Pokegame.css'

class Pokegame extends Component{
    render(){
        let hand1 =new Array;
        let hand2=[...Pokemondata]
        while(hand1.length<hand2.length){
            let randomNo= Math.floor(Math.random()*hand2.length);
            let randomIdx= hand2.splice(randomNo,1);
            hand1.push(...randomIdx);
        }
        let exp1 =0;
        for (let data of hand1){
            exp1 +=data.pokeExp;
        }
        let exp2 =0;
        for (let data of hand2){
            exp2 +=data.pokeExp;
        }
        return (
            <div className='Pokegame' >
                <div className="hand1 hand">
                    <Pokedex PokeData={hand1} exp={exp1} isWinner={exp1>exp2} />
                </div>
                <div className='hand2 hand'>-
                    <Pokedex PokeData={hand2} exp={exp2} isWinner={exp2>exp1} />
                </div>
                
            </div>
            
        )
    }
}

export default Pokegame;