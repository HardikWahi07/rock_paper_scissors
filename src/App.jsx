import React, { useState } from 'react'
import './wow.css'

export default function App() {
  let [a1, b1] = useState("")
  let [a2, b2] = useState("")
  let [c1, d1] = useState(0)
  let [c2, d2] = useState(0)
  let [e, f] = useState("No")
  let [g, h] = useState(0)
  let [i, j] = useState("-")
  let [k, l] = useState(3)
  let [m, n] = useState(0)

  function o() {
    let p = ['rock', 'paper', 'scissors']
    let q = Math.floor(Math.random() * 3)
    return p[q]
  }

  function p(r, s) {
    let t = c1
    let u = c2
    let v = i
    let w = g

    if (r === s) {
      if (v === "D") { w = w + 1 } else { v = "D"; w = 1 }
    } else if (
      (r === 'rock' && s === 'scissors') ||
      (r === 'paper' && s === 'rock') ||
      (r === 'scissors' && s === 'paper')
    ) {
      t = t + 1
      if (v === "W") { w = w + 1 } else { v = "W"; w = 1 }
    } else {
      u = u + 1
      if (v === "L") { w = w + 1 } else { v = "L"; w = 1 }
    }

    d1(t)
    d2(u)
    h(w)
    j(v)
    n(m + 1)

    if (m + 1 >= k) {
      if (t > u) {
        f("Player")
      } else if (u > t) {
        f("Computer")
      } else {
        f("Tie")
      }
    }
  }

  function r1() {
    if (m >= k) return;
    let s = "rock"
    let t = o()
    p(s, t)
    let u = "🪨"
    let v = ""
    if (t === "rock") v = "🪨"
    if (t === "paper") v = "📄"
    if (t === "scissors") v = "✂️"
    b1(u)
    b2(v)
  }

  function s1() {
    if (m >= k) return;
    let u = "paper"
    let v = o()
    p(u, v)
    let w = "📄"
    let x = ""
    if (v === "rock") x = "🪨"
    if (v === "paper") x = "📄"
    if (v === "scissors") x = "✂️"
    b1(w)
    b2(x)
  }

  function t1() {
    if (m >= k) return;
    let v = "scissors"
    let w = o()
    p(v, w)
    let x = "✂️"
    let y = ""
    if (w === "rock") y = "🪨"
    if (w === "paper") y = "📄"
    if (w === "scissors") y = "✂️"
    b1(x)
    b2(y)
  }

  function uu() {
    b1("")
    b2("")
    d1(0)
    d2(0)
    f("No")
    h(0)
    j("-")
    n(0)
  }

  let zzz = "c1"
  if (i === "W") zzz += " w1"
  if (i === "L") zzz += " l1"
  if (i === "D") zzz += " d1"

  return (
    <div className="box1">
      <h1 className="t1">Rock Paper Scissors</h1>
      
      <div className="s1">
        <label>Rounds:</label>
        <select value={k} onChange={(e) => {l(parseFloat(e.target.value)); n(0); d1(0); d2(0); b1(""); b2(""); f("No"); h(0); j("-");}}>
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      <div className="r1">
        <div className="c1">
          <h2>Round</h2>
          <div className="v1">{m}/{k}</div>
        </div>
        <div className="c1">
          <h2>Score</h2>
          <div className="v1">{c1} - {c2}</div>
        </div>
        <div className={zzz}>
          <h2>{i === "W" ? "Winning" : i === "L" ? "Losing" : i === "D" ? "Drawing" : "Win"} Streak</h2>
          <div className="v1">{g}</div>
        </div>
      </div>

      <div className="a1">
        <div className="f1">
          <span>{a1 || "❔"}</span>
          <div className="fn1">You</div>
        </div>
        <div className="vs1">VS</div>
        <div className="f1">
          <span>{a2 || "❔"}</span>
          <div className="fn1">Bot</div>
        </div>
      </div>

      <div className="ct1">
        <button className="b1" onClick={r1} disabled={m >= k}><span>🪨</span></button>
        <button className="b1" onClick={s1} disabled={m >= k}><span>📄</span></button>
        <button className="b1" onClick={t1} disabled={m >= k}><span>✂️</span></button>
      </div>

      {m >= k && (
        <div className="go1">
          <h2>
            {e === "Player" ? "You Won!" : 
             e === "Computer" ? "You Lost!" : "It's a Tie!"}
          </h2>
          <button className="rb1" onClick={uu}>Play Again</button>
        </div>
      )}

      {m < k && m > 0 && (
         <button className="rb1" style={{marginTop: '20px'}} onClick={uu}>Reset</button>
      )}
    </div>
  )
}
