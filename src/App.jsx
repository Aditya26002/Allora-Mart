import "./App.css";
import Home from "./pages/Home";
import SaleBar from "./components/SaleBar";

function App() {
  return (
    <>
      <SaleBar />
      <div className="px-12 md:px-16 lg:px-24">
        <Home />
      </div>
    </>
  );
}

export default App;
