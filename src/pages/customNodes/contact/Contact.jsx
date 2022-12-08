import "./contact.css";
import ReactFlow, { Handle, Position, Controls, useReactFlow } from "reactflow";
import { AiFillMessage } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import { GrCatalog } from "react-icons/gr";
import { GoPackage } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import SelectOptions from "../components/SelectOptions";
import { useState } from "react";

export default function Contact({ id }) {
  const [openOption, setOpenOption] = useState(false);
  return (
    <div className="greeting_node">
      <Handle
        className="circle_handle_input"
        type="target"
        position={Position.Left}
        id="ContactIn"
      />
      <div className="greeting_node_container">
        <div className="greeting_node_header">
          <div className="greeting_node_header_text">
            <AiFillMessage color="#00c70a" className="heading_icon" size={18} />
            <h4>Contact Us</h4>
          </div>
          <div
            style={{ color: "gray", cursor: "pointer" }}
            onClick={() => {
              setOpenOption(!openOption);
            }}
          >
            <SlOptions size={20} />
            {openOption && <SelectOptions id={id} />}
          </div>
        </div>
        <div className="greeting_node_body">
          {/* <div className="body_item">
            <span>𝚃</span> <p>Here is the link to our catalogue</p>
          </div> */}

          <div className="body_item">
            <IoLogoWhatsapp
              size={20}
              style={{ margin: "3px 20px 0 0" }}
              color="#00b509"
            />
            <p>
              <a href="*">wa.me/message/TWhJ68j20</a>
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
