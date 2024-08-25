import jsPDF from 'jspdf';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { useLocation } from 'react-router-dom';

const ReceiptGenerator = () => {
//   const location = useLocation();
//   const { userData } = location.state || {};
//   console.log('User Data:', userData); // Debugging: Check if userData is correctly passed

    const [userData, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from API
      axios.get('http://localhost:5000/api/data')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log('User Data:', userData);

// const userData = {
//     Name: "John Doe",  // Replace with actual data if available
//     Email: "johndoe@example.com",
//     Amount: "1.00",
//   };

  const generateReceipt = () => {
    if (!userData) {
      console.error('User data is undefined');
      return;
    }

       const doc = new jsPDF();

         // Set the background color
  const backgroundColor = [233, 143, 191]; // Light gray color in RGB
  doc.setFillColor(...backgroundColor); // Spread syntax to pass color array
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F'); // Fill the rectangle


    // Setting title style
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Receipt for Payment', 10, 10);

    // Adding some space
    doc.setFontSize(12);
    doc.text(`Name: ${userData.name || 'Unknown'}`, 10, 20);
    doc.text(`Number of persons: ${userData.np || 'N/A'}`, 10, 30);
    doc.text(`Mobile number: ${userData.phone || '0.00'}`, 10, 40);
    doc.text(`Total Amount: $${userData.np*50 || '0.00'}`, 10, 50);

    // Adding a line
    doc.setLineWidth(0.5);
    doc.line(10, 55, 200, 55); // Draw a line from (10, 45) to (200, 45)
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Thank you for your business!', 10, 65);

    // Save the PDF
    doc.save(`receipt_${userData.name || 'unknown'}.pdf`);
  };

  


  return (
    <div className='payfail'>
      <h1 className='head1'>Receipt</h1>
      <p className='para1'>Thank you, {userData?.name || 'Guest'}, for your payment!</p>
      <button onClick={generateReceipt}>Download Receipt</button>
    </div>
  );
};

export default ReceiptGenerator;
