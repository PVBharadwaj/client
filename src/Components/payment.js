import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './payment.css'; // Ensure you have a proper CSS file for styles

const Payment = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Load the PayPal SDK script
  //   const script = document.createElement('script');
  //   script.src = 'https://www.paypal.com/sdk/js?client-id=AZazp6JxWvFSkwlODkglO5nJM6Gq6SYo30bxAZbVVmHRcS6l6X3ljGnOnZGa0B0Vv1mEfcA7MyUQz9uh';
  //   script.async = true;

  //   // Append the script to the document
  //   document.body.appendChild(script);

  //   // Cleanup script on component unmount
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Function to render PayPal button once script is loaded
  //   const renderPayPalButton = () => {
  //     if (window.paypal) {
  //       window.paypal.Buttons({
  //         createOrder: (data, actions) => {
  //           return actions.order.create({
  //             purchase_units: [{
  //               amount: {
  //                 value: '1.00', // Update with the relevant amount
  //               },
  //             }],
  //           });
  //         },

  //         onApprove: (data, actions) => {
  //           return actions.order.capture().then((details) => {
  //             const userData = {
  //               Name: "John Doe",  // Replace with actual data if available
  //               Email: "johndoe@example.com",
  //               Amount: "100.00",
  //             };
          
  //             // Navigate to the receipt page and pass userData
  //             navigate('/receipt', { state: { userData } });
  //           });
  //         },

  //         onError: (err) => {
  //           console.error('An error occurred:', err);
  //           alert('Something went wrong with your payment. Please try again.');
  //           // Navigate to the failure page
  //           navigate('/paymentfailure');
  //         },
  //       }).render('#paypal-button-container');
  //     }
  //   };

  //   // Ensure the PayPal script is loaded before rendering button
  //   const checkPayPalReady = setInterval(() => {
  //     if (window.paypal) {
  //       renderPayPalButton();
  //       clearInterval(checkPayPalReady);
  //     }
  //   }, 100);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(checkPayPalReady);
  // }, [navigate]);

  return (
    <div className="container">
      <form>
        {/* <div id="paypal-button-container"></div> */}
        <div>
          <Link className='paymentlink' to="/receipt">Click here to continue</Link>
        </div>
      </form>
    </div>
  );
};

export default Payment;
