import React, {Component} from 'react';
import './Pokecard.css'
let padToThree = (num)=>{return (`00${num}`.slice(-3) + '.png') };
class Pokecard extends Component{
    render(){
        
        let {pokeName,pokeType,pokeExp,id} = this.props.pokemonData;
        let imgSrc= 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+padToThree(id);
        return (
            <div className ="Pokecard">
                <h3 className='Pokecard-title'>{pokeName}</h3>
                <img className='Pokecard-img' src={imgSrc} alt={pokeName}/>
                <p>{pokeType}</p>
                <p>{pokeExp}</p>
            </div>
        )
    }
}

export default Pokecard;