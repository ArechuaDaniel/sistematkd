import { BrowserRouter } from "react-router-dom";
import ClubRoutes from "./routes/ClubRoutes";
import { Route, Routes } from "react-router";



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/sistematkd' element={<ClubRoutes/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
