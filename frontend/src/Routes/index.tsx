import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "../components/navbar";
import Form from "../pages/Form";
import Listing from "../pages/Listing";


const RoutesSystem = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Listing />} />
                <Route path="/form">
                    <Route path=":movieId"  element={<Form />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesSystem;