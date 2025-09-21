import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";
import NotFound from "./pages/NotFound";




export const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} /> 
        <Route path="/Edit-Contact" element={<EditContact/>} />
        <Route path="/Add-Contact" element={<AddContact/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
      
    )
);