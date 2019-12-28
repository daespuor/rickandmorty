import React,{useState, useEffect} from 'react';
import {css} from '@emotion/core';


const Character= ()=>{
    const [character,setCharacter] = useState({});
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/2')
        .then((response)=> {
            return response.json();
        })
        .then((object)=> {
            setCharacter(object);
        });
    },[]);
    return (
        <div className="character" css={
            css`padding: 10px;
            border: 1px solid #000;
            border-radius: 3px;
            margin: 0px;
            text-align: center;`
        }>
            <img src={character.image} />
            <h3>{character.name}</h3>
            <button>Like</button>
        </div>    
    )
}

export default Character;