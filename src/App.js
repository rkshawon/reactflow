import "./App.css";
import Header from "./header";
import DnDFlow from "./pages";
import ProviderFlow from "./test/ProviderFlow";

function App() {
  return (
    <div className="app">
      <Header />
      <DnDFlow />
      {/* <ProviderFlow /> */}
    </div>
  );
}

export default App;
