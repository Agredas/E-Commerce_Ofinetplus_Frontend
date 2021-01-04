import React from "react";
import "./Catalog.scss";

function Catalog(props) {
  return (
    <div style={props.content?.rows.length ? {display: 'block'} : {display: 'none'}} className={`catalogContent`}>
      <h2 className="catalogTitle">{props.title}</h2>
    </div>
  );
}

export default Catalog;