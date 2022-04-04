import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <div className="d-flex mt-2">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <Products />
          </div>
        </div>  
      </Provider>
    </div>
  );
}

export default App;
