import React from "react";

export default function Tabs({ logicData }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div>
      {logicData.map((item) => {
        return (
          <div
            className="single_node"
            key={item.id}
            onDragStart={(event) => onDragStart(event, item.nodeType)}
            draggable
          >
            <div
              style={{
                color: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2px",
              }}
            >
              {item.icon}
            </div>
            <p style={{ fontWeight: "600" }}>{item.text}</p>
            <div className="dot_option">::</div>
          </div>
        );
      })}
    </div>
  );
}
