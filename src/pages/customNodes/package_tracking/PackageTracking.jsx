import "./packageTracking.css";
import ReactFlow, { Handle, Position, Controls, useReactFlow } from "reactflow";
import { AiFillMessage } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import { GrCatalog } from "react-icons/gr";
import { GoPackage } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RxInput } from "react-icons/rx";
import { useState } from "react";
import SelectOptions from "../components/SelectOptions";

export default function PackageTracking({ id }) {
  const [openOption, setOpenOption] = useState(false);
  return (
    <div className="greeting_node">
      <Handle
        className="circle_handle_input"
        type="target"
        position={Position.Left}
        id="PackageIn"
      />
      <div className="greeting_node_container">
        <div className="greeting_node_header">
          <div className="greeting_node_header_text">
            <AiFillMessage color="gray" className="heading_icon" size={18} />
            <h4>Package Tracking</h4>
          </div>
          <div
            style={{
              color: "gray",
              cursor: "pointer",
            }}
            onClick={() => {
              setOpenOption(!openOption);
            }}
          >
            <SlOptions size={20} />
            {openOption && <SelectOptions id={id} />}
          </div>
        </div>
        <div className="greeting_node_body">
          <div className="body_item">
            <span>𝚃</span> <p>Please input the ID of your package</p>
          </div>

          <div className="body_item">
            <span>
              <RxInput />
            </span>
            <p>
              Input replay to <a href="*">{`{"package_id"}`}</a>
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <Handle
          className="circle_handle_output contact"
          type="source"
          position={Position.Right}
          id="b"
        />
      </div> */}
    </div>
  );
}
