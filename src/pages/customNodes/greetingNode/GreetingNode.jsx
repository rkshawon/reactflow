import ReactFlow, {
  Handle,
  Position,
  Controls,
  useNodesState,
  useReactFlow,
} from "reactflow";
import "./greetingNode.css";
import { AiFillMessage } from "react-icons/ai";
import { TbTriangles } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import { GoPackage } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef, useState } from "react";
import SelectOptions from "../components/SelectOptions";

export default function GreetingNode({ id }) {
  const [openOption, setOpenOption] = useState(false);

  const isValidConnectionCatalogue = (connection) => {
    if (connection.targetHandle === "CatalogueIn") return true;
  };
  const isValidConnectionPackageTrack = (connection) => {
    if (connection.targetHandle === "PackageIn") return true;
  };

  const isValidConnectionContactUs = (connection) => {
    if (connection.targetHandle === "ContactIn") return true;
  };

  return (
    <div className="greeting_node">
      <Handle
        className="circle_handle_input"
        type="target"
        position={Position.Left}
        id="GreetingIn"
      />
      <div className="greeting_node_container">
        <div className="greeting_node_header">
          <div className="greeting_node_header_text">
            <AiFillMessage color="#2f89ff" className="heading_icon" size={18} />
            <h4>Greeting</h4>
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
        <div className="greeting_node_body">
          <div className="body_item">
            <span>𝚃</span> 👋
          </div>
          <div className="body_item message">
            <span>𝚃</span>
            <p>
              Welcome to our store, I'm your bot assistant. Let me know how can
              I help you:
            </p>
          </div>
          <div className="body_item">
            <span>
              <TbTriangles />
            </span>
            <small style={{ fontSize: "20px" }}>📝</small>
            <p>Catalogue</p>
          </div>
          <div className="body_item">
            <span>
              <TbTriangles />
            </span>
            <small style={{ fontSize: "20px" }}>📦</small>
            <p>Package Tracking</p>
          </div>
          <div className="body_item">
            <span>
              <TbTriangles />
            </span>
            <small style={{ fontSize: "20px" }}>📞</small>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div>
        <Handle
          className="circle_handle_output catalogue"
          type="source"
          position={Position.Right}
          id="Greetingout1"
          isValidConnection={isValidConnectionCatalogue}
        />
        <Handle
          className="circle_handle_output package"
          type="source"
          position={Position.Right}
          id="GreetingOut2"
          isValidConnection={isValidConnectionPackageTrack}
        />
        <Handle
          className="circle_handle_output contact"
          type="source"
          position={Position.Right}
          id="GreetingOut3"
          isValidConnection={isValidConnectionContactUs}
        />
      </div>
    </div>
  );
}
