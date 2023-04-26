import React from "react";

function NotificationComponent() {
  return (
    <div className="notification">
      <span className="box"></span>
      <div className="content">
        <p>
          Liked what you bought? Do check out our top recommendations to go with
          your recent purchase.<br/> Shop Now 
        </p>
        <span>DD MMM, YYYY</span>
      </div>
    </div>
  );
}

export default NotificationComponent;
