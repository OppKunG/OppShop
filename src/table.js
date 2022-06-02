import React from "react";

export default function Table() {
  const data = [
    ["JavaScript", 100],
    ["React", 150],
  ];

  function onMouseOverRow(ev) {
    ev.target.parentNode.style.backgroundColor = "yellow";
  }

  function onMouseOutRow(ev) {
    ev.target.parentNode.style.backgroundColor = "white";
  }

  return (
    <table border="1" cellPadding={5} style={{ margin: "auto", marginTop: 30 }}>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
      {data.map((item) => {
        return (
          <tr onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        );
      })}
    </table>
  );
}
