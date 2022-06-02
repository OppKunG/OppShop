import React from "react";

export function EventObject() {
  function onclickStartStop(ev) {
    let t = ev.target.innerText;
    let s = t === "Start" ? "Stop" : "Start";
    ev.target.innerText = s;
  }

  function onclickAdd(ev) {
    let t = ev.target.innerText;
    let r = eval(t);
    alert(`${t} = ${r}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <button onClick={(ev) => onclickStartStop(ev)}>Start</button>
      <br></br>
      <button onClick={(ev) => onclickAdd(ev)}>10 + 20</button>
      <br></br>
      <button onClick={(ev) => onclickAdd(ev)}>30 * 40</button>
      <br></br>
    </div>
  );
}
