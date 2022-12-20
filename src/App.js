import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import {Login} from "./components/Login.js";
import {Register} from './components/Register';
import { LandingPage } from './components/LandingPage';
import { ShippingAddress } from './components/ShippingAddress';
import { AddNewAddress } from './components/AddNewAddress';
import { ShippingMethods } from './components/ShippingMethods';
import { CreditCards } from './components/CreditCards';
import {AddNewCard} from './components/AddNewCard';
import { TrackOrders } from './components/TrackOrders';
import { SendPackage } from './components/SendPackage';
import { CreateComplaint } from './components/CreateComplaint';
import { FindCheapest } from './components/FindCheapest';
import { ContactCourier } from './components/ContactCourier';
function App() {
  return (
      <Routes>
        <Route path = "/" element = {<Login></Login>}></Route>
        <Route path = "register" element = {<Register></Register>}></Route>
        <Route path = "landingpage" element = {<LandingPage></LandingPage>}></Route>
        <Route path = "landingpage/shippingaddresses" element = {<ShippingAddress></ShippingAddress>}></Route>
        <Route path = "landingpage/shippingaddresses/addnewaddress" element = {<AddNewAddress></AddNewAddress>}></Route>
        <Route path = "landingpage/shippingmethods" element = {<ShippingMethods></ShippingMethods>}></Route>
        <Route path = "landingpage/creditcards" element = {<CreditCards></CreditCards>}></Route>
        <Route path = "landingpage/creditcards/addnewcard" element = {<AddNewCard></AddNewCard>}></Route>
        <Route path = "landingpage/trackorders" element = {<TrackOrders></TrackOrders>}></Route>
        <Route path = "landingpage/sendpackage" element = {<SendPackage></SendPackage>}></Route>
        <Route path = "landingpage/createcomplaint" element = {<CreateComplaint></CreateComplaint>}></Route>
        <Route path = "landingpage/findcheapest" element = {<FindCheapest></FindCheapest>}></Route>
        <Route path = "landingpage/contactcourier" element = {<ContactCourier></ContactCourier>}></Route>
      </Routes>
  );
}

export default App;
