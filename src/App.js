import React from "react";
import FooterIndex from "./reactrouterdom/FooterIndex";
import { BrowserRouter} from "react-router-dom";
import Navigate from "./reactrouterdom/Navigate";

function App() {
return(
  <>
  <h1>App입니다</h1>
  <BrowserRouter>
    <FooterIndex/>
    <Navigate/>
  </BrowserRouter>
  </>
  )
}

export default App;

