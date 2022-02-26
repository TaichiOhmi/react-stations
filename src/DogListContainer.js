// DO NOT DELETE
import React, { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect';

export function DogListContainer () {
    //初期値
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("spaniel");
    const handleChange = (e) => setSelectedBreed(e.target.value);
    const [showBreeds, setShowBreeds] = useState([]);
    //最初に訪れた時だけ犬のリストを取得する
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {setBreeds(data.message)},[])
        console.log('フォームのリスト取得');
        imageList()
        console.log(showBreeds);
    }, [])

    //表示する画像のリスト
    const imageList = () => {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/8`)
        .then(response => response.json())
        .then(data => setShowBreeds(data.message),[])
      }
    

    return (
        <div className='imageList'>
            <BreedsSelect breeds = {breeds} selected = {selectedBreed} change = {handleChange} />
            <button onClick={imageList}>Show</button>
            <div className='images'>
                {showBreeds.map((breed,i) => <img key={i} src={breed} alt="犬の写真"/> )}
            </div>
        </div>
    )
    
  }
export default DogListContainer;