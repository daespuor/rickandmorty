import React, {useEffect, useState} from 'react';
import CharacterItemList from './characterItemList';
import {css} from '@emotion/core';
const CharacterList = () =>{
    const [characters,setCharacters]= useState([]);
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response=>{
            return response.json();
        })
        .then(objects=>{
            const currentCharacters=objects.results.slice(0,10).map(obj=>({...obj,count:0}));
            setCharacters(currentCharacters);
        });
    },[]);
    return (
        <div className="characterList" css={css`text-align:center;`}>
            <h3>Top 10 Favorites Characters</h3>
            {
                characters.map(character=>{
                    return <CharacterItemList data={character} key={character.id}/>
                })
            }
        </div>    
    )
}

export default CharacterList;