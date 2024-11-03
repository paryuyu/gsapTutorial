import gsap from 'gsap'
import './App.css'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react';

function App() {
  const {contextSafe} = useGSAP()
  const boxRef = useRef()
  const [circlex, setCirclex] = useState(0)
  const [circley, setCircley] = useState(0)
  const [rotir, setrotir] = useState(0)

  const random =  gsap.utils.random(-50,50,10)
  const randomY =  gsap.utils.random(-50,50,10)
  const roti = gsap.utils.random(-360,360,0)

  useGSAP(()=>{
    gsap.to(".box",{
      x:circlex,
      y:circley,
      duration:0.5,
      rotate:rotir
    })
  },{scope:".container", dependencies:[circlex, circley, rotir]}) //의존성배열

  const handleClick = ()=>{
    setCirclex(random)
    setCircley(randomY)
    setrotir(roti)
  }


  const handleClick2 = contextSafe(()=>{
  gsap.to(boxRef.current,{
    rotate:360,
    duration:1
  })
  })

  return (
  <main>
    <div className="container ">
      <div className="box" ref={boxRef}></div>
      <div className="circle"></div>
    </div>

    <div className="kuch">
      <div className="box"></div>
      <div className="circle"></div>
    </div>
    <button onClick={handleClick}>테스트</button>

    <button onClick={handleClick2}>테스트2</button>
  </main>
  )
}

export default App
