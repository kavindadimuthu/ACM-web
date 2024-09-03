import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <img src="/images/logo-w.png" alt="logo" />
      </header>
      <section id='section-1'>
          <div className="left-content">
          <h1>Music Festival</h1>
          <p>He's one of the world's most successful musicians, introduced Guy Ritchie to Madonna and has just been made a CBE. He has also written his memoirs - and doing it plunged him into depression.</p>
          <h2>So why does everyone mock him?</h2>
          <button>read more</button>
        </div>
        <div className="right-content">
          <div className="right-small-box-1"></div>
        </div>
      </section>
      <section id='section-2'>
        <div className="left-box">
          <h1>Musical legend.</h1>
          <p>Gordon Sumner, better known as Sting, was born in Newcastle upon Tyne, England, on October 2, 1951. He is best known for his singing career, both with the 1980s band The Police and as a solo artist. Sting is also a distinguished songwriter and actor, as well as an active philanthropist in causes from environmentalism to human rights.</p>
          <button>read more</button>
        </div>
        <div className="right-box">
        <h1 style={{textAlign: "right"}}>Acting and<br /> Scoring in Films</h1>
          <p>Along with his musical exploration and experimentation, Sting found time for acting. He appeared in several films, including the science-fiction drama Dune (1984) and the popular British crime film Lock, Stock, and Two Smoking Barrels (1998). </p>
          <button>read more</button>
        </div>
          <img src="/images/sec-2-img.jpeg" alt="" />
      </section>
      <section id='section-3'>
        <div className="left-content">
          <div className="right-small-box-1"></div>
        </div>
        <div className="right-content">
          <h1>'The Last Ship' Broadway Musical</h1>
          <p>In 2013, Sting released the album The Last Ship, which drew inspiration from his childhood. He spent his early years not far from the shipyards of Wallsend, a Newcastle neighborhood. Singer and actor Jimmy Nail contributed vocals to the album and he also helped Sting develop a musical based on the album.</p>
          <button>read more</button>
        </div>
      </section>
      <section id='section-4'>
        <div className="left-box">
          <h1>Personal Life</h1>
          <p>In addition to his musical career, Sting has been active in human rights and other social issues. He and his wife, Trudie Styler, have been married since 1992. The couple has four children. Sting also has two other children from his first marriage.</p>
          <button>read more</button>
        </div>
        <div className='right-box'><img src="/images/sec-4-img.jpeg" alt="" /></div>
        <div className="back-white-box"></div>
      </section>
      <section id='section-5'>
        <div className="left-content">
          <h1>Music Festival</h1>
          <p>He's one of the world's most successful musicians, introduced Guy Ritchie to Madonna and has just been made a CBE. He has also written his memoirs - and doing it plunged him into depression.</p>
          <h2>So why does everyone mock him?</h2>
          <button>read more</button>
        </div>
        <div className="right-content">
          <div className="right-small-box-1"></div>
        </div>
      </section>
      <section id='section-6'>
      <div className="left-box">
          <h1>What exactly is the spirit?</h1>
          <p>I don't know what it is. But it's something I need to connect with on a regular basis and the roots for me are music and my relationships. I don't know what it is. I only have a limited brain. I'm just a human being.</p>
          <button>read more</button>
        </div>
        <div className="right-box">
        <h1>"</h1>
          <p>Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored. </p>
          <button>read more</button>
        </div>
          <img src="/images/sec-6-img.jpeg" alt="" />
      </section>
      <footer>Web Template is created by Kavinda Dewmith.</footer>
    </>
  )
}

export default App
