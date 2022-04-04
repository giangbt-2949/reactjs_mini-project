import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex mt-2">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <Products />
        </div>
      </div>  
    </div>
  );
}

export default App;
