// DO NOT DELETE
import React, { useState } from 'react'
import DogImage from './DogImage'
import BreedsSelect from './BreedsSelect'
import DogListContainer from './DogListContainer';
/**
 * 
 * @type {React.FC}
 */
export function Description (props) {
    //初期値
    const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-japanese/n02085782_3516.jpg');
    //ボタンクリック時に動く関数
    const imageChange = () => {
      console.log('render!');
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
    }
  
    return (
        <div className='AboutDogs'>
            <DogImage dogUrl = {dogUrl}/>
            <br></br>
            <button onClick={imageChange}>Click to update</button>
            <div className='text'>
            <p>The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf which is characterized by an upturning tail. </p>
            <p>The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest living relative.</p>
            <p>The dog was the first species to be domesticated, by hunter–gatherers over 15,000 years ago, before the development of agriculture.</p>
            <p>Due to their long association with humans, dogs have expanded to a large number of domestic individuals and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.</p>
            <p>Over the millennia, dogs became uniquely adapted to human behavior, and the human-canine bond has been a topic of frequent study.</p>
            <p>The dog has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes. Dog breeds vary widely in shape, size, and color.</p>
            <p>They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and the military, companionship, therapy, and aiding disabled people. </p>
            <p>This influence on human society has given them the sobriquet of "man's best friend".</p>
            <p id='ref'>From Wikipedia, the free encyclopedia</p>
            </div>
            <DogListContainer />
        </div>
    )
  }
export default Description;