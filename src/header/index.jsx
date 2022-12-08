import "./index.css";
import { BsArrowLeft } from "react-icons/bs";
import { GrPlayFill } from "react-icons/gr";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header text">
        <BsArrowLeft
          color="gray"
          style={{ fontWeight: "900", marginRight: "10px" }}
          size={20}
        />
        <p style={{ margin: "0 5px", color: "gray" }}>Flows /</p>
        <p>Store Assistant</p>
      </div>
      <div className="header button">
        <button id="previewBtn">
          <GrPlayFill style={{ marginRight: "10px" }} />
          Preview Demo
        </button>
        <button id="publishBtn">Publish Now</button>
      </div>
    </div>
  );
}
