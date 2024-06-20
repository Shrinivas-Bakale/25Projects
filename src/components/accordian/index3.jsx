import React from "react";
import data from "./data";
import { useState } from "react";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  const handleSingleClick = (getId) => {
    // console.log(getId);
    setSelected(getId === selected ? null : getId);
  };

  const handleMultiClick = (getId) => {
    const cpyMulti = [...multi];
    const findIndexOfGetId = cpyMulti.indexOf(getId);
    console.log(findIndexOfGetId);

    if (findIndexOfGetId === -1) cpyMulti.push(getId);
    else cpyMulti.splice(findIndexOfGetId, 1);
    setMulti(cpyMulti);
  };
  //   console.log(multi);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        Enable Multi Select
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="items">
              <div
                className="title"
                key={dataItem.id}
                onClick={
                  enableMulti
                    ? () => handleMultiClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
              >
                <h2>{dataItem.title}</h2>
                <span>+</span>
              </div>
              {enableMulti
                ? multi.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.content}</div>
                  )
                : selected === dataItem.id && <div>{dataItem.content}</div>}
              {/* {selected === dataItem.id ? (
                <div className="content"> {dataItem.content} </div>
              ) : (
                <div></div>
              )} */}
            </div>
          ))
        ) : (
          <h3>No data found</h3>
        )}
      </div>
    </div>
  );
}
