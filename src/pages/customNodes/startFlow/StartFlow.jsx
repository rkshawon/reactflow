import "./startFlow.css";
import { Handle, Position } from "reactflow";

export default function StartFlow() {
  return (
    <div className="startFlow_node">
      <div className="startFlow_node_container">
        <small style={{ fontSize: "15px", color: "white", fontWeight: "500" }}>
          StartFlow
        </small>
      </div>

      <Handle
        className="circle_handle_output"
        type="source"
        position={Position.Right}
        id="b"
      />
    </div>
  );
}
