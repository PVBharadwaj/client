import React, { useEffect } from 'react';
import './Chatbot.css';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  useEffect(() => {
    const loadChatbotScripts = () => {
      const injectScript = document.createElement('script');
      injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
      injectScript.async = true;
      injectScript.onload = () => {
        // You may need to initialize the Botpress bot here if required
      };
      
      const configScript = document.createElement('script');
      configScript.src = 'https://mediafiles.botpress.cloud/fa4315c9-adb7-45c0-a99d-067f449bc21a/webchat/v2.1/config.js';
      configScript.async = true;

      document.body.appendChild(injectScript);
      document.body.appendChild(configScript);
    };

    loadChatbotScripts();

    return () => {
      // Cleanup the scripts
      const injectScript = document.querySelector(`script[src='https://cdn.botpress.cloud/webchat/v2.1/inject.js']`);
      const configScript = document.querySelector(`script[src='https://mediafiles.botpress.cloud/fa4315c9-adb7-45c0-a99d-067f449bc21a/webchat/v2.1/config.js']`);
      if (injectScript) document.body.removeChild(injectScript);
      if (configScript) document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div className="main-page">
      <div className="image-div"></div>
      <div className="tandcplate">
        <div>
          <h1 className="head1">THE INDIAN MUSEUM</h1>
          <p className="para1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tenetur dolores libero minus est in accusamus et placeat nesciunt vitae impedit, veniam nisi modi temporibus vel non facere iusto.
          </p>
          {/* <a href="payment.html">payment</a> */}
          <Link to={'/payment'}>Payment</Link>
        </div>
      </div>
      {/* Add a placeholder div for the Botpress chat component */}
      <div id="bp-webchat" style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}></div>
    </div>
  );
};

export default Chatbot;