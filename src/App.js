// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
// <h1>hello</h1>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./Components/payment";
import Chatbot from "./Components/Chatbot";
import ReceiptGenerator from "./Components/Receiptgenerator";
import PaymentFailure from "./Components/Paymentfailure";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="client">
        <Routes>
        <Route exact path="/client" element={<Chatbot />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/paymentfailure" element={<PaymentFailure />}></Route>
          <Route path="/receipt" element={<ReceiptGenerator />}></Route>

        </Routes>

        {/* <Subscribebtn /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;