import { Content } from "arwes";
import React from "react";
import "./Catalog.scss";

function Catalog(props) {
  return (
    <div style={props.content?.rows.length ? {display: 'block'} : {display: 'none'}} className={`catalogContent`}>
      <Content>
        <h2 className="catalogTitle">{props.title}</h2>
      </Content>
    </div>
  );
}

export default Catalog;