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
import { Employeelandingpage } from './components/EmployeeLandingPage';
import { AssignPackages } from './components/AssignPackages';
import { Transaction } from './components/Transaction';
import { CourierLandingPage } from './components/CourierLandingPage';
import { TaskDetails } from './components/TaskDetails';
import { Admin } from './components/Admin';
import { AssignTasks } from './components/AssignTasks';
import { LastReports } from './components/LastReports';
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
        <Route path= "employeelandingpage" element={<Employeelandingpage></Employeelandingpage>}></Route>
        <Route path='employeelandingpage/assignpackages' element={<AssignPackages></AssignPackages>}></Route>
        <Route path='employeelandingpage/transactions' element={<Transaction></Transaction>}></Route>
        <Route path='courierlandingpage' element={<CourierLandingPage></CourierLandingPage>}></Route>
        <Route path='courierlandingpage/taskdetails' element={<TaskDetails></TaskDetails>}></Route>
        <Route path='admin' element={<Admin></Admin>}></Route>
        <Route path="admin/assigntasks" element={<AssignTasks></AssignTasks>}></Route>
        <Route path= "admin/lastreports" element={<LastReports></LastReports>}></Route>
      </Routes>
  );
}

export default App;
