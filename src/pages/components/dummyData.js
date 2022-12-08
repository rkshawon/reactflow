import { TbArrowBearRight } from "react-icons/tb";
import { VscSymbolBoolean } from "react-icons/vsc";
import { TbBrackets } from "react-icons/tb";
import { FaRandom } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { AiFillMessage } from "react-icons/ai";

const stepData = [
  {
    id: 1,
    icon: <AiFillMessage />,
    text: "Greeting",
    nodeType: "greetingNode",
  },
  {
    id: 2,
    icon: <VscSymbolBoolean />,
    text: "Catalogue",
    nodeType: "catalogue",
  },
  {
    id: 3,
    icon: <TbBrackets />,
    text: "Package Tracking",
    nodeType: "packageTracking",
  },
  {
    id: 4,
    icon: <FaRandom />,
    text: "Contact Us",
    nodeType: "contact",
  },
  {
    id: 5,
    icon: <FaRandom />,
    text: "Result",
    nodeType: "result",
  },
];
const logicData = [
  {
    id: 1,
    icon: <TbArrowBearRight />,
    text: "Flow",
  },
  {
    id: 2,
    icon: <VscSymbolBoolean />,
    text: "Boolean",
  },
  {
    id: 3,
    icon: <TbBrackets />,
    text: "Set",
  },
  {
    id: 4,
    icon: <FaRandom />,
    text: "Random",
  },
  {
    id: 5,
    icon: <RxExit />,
    text: "Exit",
  },
];
const triggerData = [
  {
    id: 1,
    icon: <TbArrowBearRight />,
    text: "Flow",
  },
  {
    id: 2,
    icon: <VscSymbolBoolean />,
    text: "Boolean",
  },
  {
    id: 3,
    icon: <TbBrackets />,
    text: "Set",
  },
  {
    id: 4,
    icon: <FaRandom />,
    text: "Random",
  },
  {
    id: 5,
    icon: <RxExit />,
    text: "Exit",
  },
];
export { stepData, logicData, triggerData };
