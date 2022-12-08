import "./sidebar.css";
import { logicData, stepData, triggerData } from "./dummyData";
import Tabs from "./Tabs";
import { useState } from "react";

export default function Sidebar() {
  const [acitveTab, setActiveTab] = useState(0);
  const acitveTabs = (value) => {
    setActiveTab(value);
  };
  return (
    <aside className="node_list_container">
      <div className="description">Nodes</div>
      <div className="header_selector">
        <h5
          className={acitveTab === 0 ? "selectedh5" : ""}
          onClick={() => acitveTabs(0)}
        >
          Step
        </h5>
        <h5
          className={acitveTab === 1 ? "selectedh5" : ""}
          onClick={() => acitveTabs(1)}
        >
          Logic
        </h5>
        <h5
          className={acitveTab === 2 ? "selectedh5" : ""}
          onClick={() => acitveTabs(2)}
        >
          Trigger
        </h5>
        <h5
          className={acitveTab === 3 ? "selectedh5" : ""}
          onClick={() => acitveTabs(3)}
        >
          API
        </h5>
      </div>
      <div>
        {acitveTab === 0 && <Tabs logicData={stepData} />}
        {acitveTab === 1 && <Tabs logicData={logicData} />}
        {acitveTab === 2 && <Tabs logicData={stepData} />}
        {acitveTab === 3 && <Tabs logicData={triggerData} />}
      </div>

      {/* <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div> */}
    </aside>
  );
}
