import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import SelectOptions from "../components/SelectOptions";
import "./resultNode.css";

export default function ResultNode({ id }) {
  const [openOption, setOpenOption] = useState(false);
  return (
    <div className="result_node_container">
      <div className="result_node_header">
        <div className="result_node_header_text">
          <AiFillMessage color="#2f89ff" className="heading_icon" size={18} />
          <h4>Result</h4>
        </div>
        <div
          style={{
            color: "gray",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => {
            setOpenOption(!openOption);
          }}
        >
          <SlOptions size={20} />
          {openOption && <SelectOptions id={id} />}
        </div>
      </div>
      <div className="result_node_body">
        <div className="body_item">
          <span>𝚃</span> 👋
        </div>
      </div>
    </div>
  );
}
