import React from "react";
import data from "./data";
import "./style2.css";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  const handleSingle = (getId) => { 
    console.log(getId);
    // setSelected(getId);
    selected === getId ? setSelected(null) : setSelected(getId);
  };

  const handleMultiple = (getId) => {
    const cpyMultiple = [...multi];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    // console.log(cpyMultiple);
    console.log(findIndexOfCurrentId);
    // console.log(multi);
    setMulti(cpyMultiple);
    console.log(cpyMultiple);
  };
  // console.log(enableMulti);
  return (
    <div className="wrapper">
      <div className="accordion">
        <button onClick={() => setEnableMulti(!enableMulti)}>
          Enable Multiple Select
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="items" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMulti === true
                    ? () => handleMultiple(dataItem.id)
                    : () => handleSingle(dataItem.id)
                }
              >
                <h3> {dataItem.title} </h3>
                <span>+</span>
              </div>
              <div className="content">
                {enableMulti
                  ? multi.indexOf(dataItem.id) !== -1 && (
                      <div className="content"> {dataItem.content} </div>
                    )
                  : selected === dataItem.id && (
                      <div className="content"> {dataItem.content} </div>
                    )}
                {/* {dataItem.id === selected ? dataItem.content : null} */}
              </div>
            </div>
          ))
        ) : (
          <h2>Error</h2>
        )}
      </div>
    </div>
  );
}
