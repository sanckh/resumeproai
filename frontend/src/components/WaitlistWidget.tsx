// src/components/WaitlistWidget.tsx
import React from "react";
import Helmet from "react-helmet";

const WaitlistWidget: React.FC = () => {
  return (
    <div>
      <div id="getWaitlistContainer" data-waitlist_id="22486"></div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
    </div>
  );
};

export default WaitlistWidget;
