
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','군산 짬뽕 맛집','성남 돈까스 맛집','여자 코트 추천']);


  let posts='강남고기맛집';
  let [따봉,따봉변경]=useState(0);
  let[맛집,맛집변경]=useState(['남자 코트 추천','여자코트추천']);
  function 제목변경(){
    var newArray= [...글제목];
    newArray[0]='여자코트 추천';
    글제목변경(newArray);
  }
  return (
    <div className="App">
       <div class="black-nav"> 
       <div style={{color:'blue',fontsize:'30px'}}>개발 Blog</div>
       </div>
       <button onClick={제목변경} >버튼 </button>
       <div className="list">
         <h3>{글제목[0]}<span onClick={ ()=>{ 따봉변경(따봉 +1) } }> ♥ </span> {따봉} </h3>
         <p>6월 15일 발행</p>
         <hr/>
         <h3>{글제목[1]}</h3>
         <p>3월 14일 발행</p>
         <hr/>
         <h3>{글제목[2]}</h3>
         <p>2월 17일 발행</p>
         <hr/>
       </div>
       
    <Modal />
  
    </div>
  );
}

function Modal(){
  return (
    <>
      <div className="modal">
        <h2>강남역 줄서서먹는 맛집:육즙 가득한 육전식당</h2>
        <p>2020.08.19</p>
        <img src="고기.png"></img>
        <p>
          
          생목살을 시켰는데 고기가 정말 크죠?
          </p>
          <p>
          구운 후의 선홍빛 빛깔을 보세요 정말 맛있어보여요
          </p>
          <img src="냉면.png"></img>
          <p>
          고기 먹은 후엔 냉면이죠
          </p>
          <p>
          이집 냉면 맛집입니다
          </p>
          <p>
          또 먹고싶네요.
          </p>
          <p>
          출처:https://binni.tistory.com/285
        </p>
       </div>
       
  </>
  )
}

export default App;
