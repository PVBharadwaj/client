import React from 'react';

const PaymentFailure = () => {
  return (
    <div  className="payfail">
      <h1 className="head1">Payment Failed</h1>
      <p  className="para1">Unfortunately, your payment was not successful. Please try again or contact support.</p>
      {/* You can add a button to retry the payment or go back to the main page */}
      <button style={{fontSize: "30px"}} onClick={() => window.location.href = '/payment'}>Retry Payment</button>
    </div>
  );
};

export default PaymentFailure;
