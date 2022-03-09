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
        // thenメソッドはpromiseを返す
        // プロミス (Promise) は、作成された時点では分からなくてもよい値へのプロキシーです。非同期のアクションの成功値または失敗理由にハンドラーを結びつけることができます。これにより、非同期メソッドは結果の値を返す代わりに、未来のある時点で値を提供するプロミスを返すことで、同期メソッドと同じように値を返すことができるようになります。
        // プロキシ（Proxy）には”代理”という意味があり、オブジェクトに対して直接ではなくProxyを経由してアクセスを行うことで本来の処理を変更したり、追加の処理を加えること(通常のオブジェクトの処理に対して割り込みを行い本来の振る舞いを変える)ができます。
        // イベントが発生した時に実行する処理や関数のことをイベントハンドラと呼びます。
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
