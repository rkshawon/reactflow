import React from "react";
import { useReactFlow } from "reactflow";

export default function SelectOptions({ id }) {
  const reactFlowInstance = useReactFlow();

  const setNodeId = () => {
    reactFlowInstance.setNodes((nds) => nds.filter((node) => node.id !== id));
  };
  return (
    <div
      onClick={setNodeId}
      style={{
        width: "80px",
        position: "absolute",
        backgroundColor: "white",
        boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.75)",
        textAlign: "center",
        padding: "6px 0",
        color: "black",
        fontWeight: "600",
        border: "1px solid #f0f0f0",
        borderRadius: "3px",
      }}
    >
      Delete
    </div>
  );
}
