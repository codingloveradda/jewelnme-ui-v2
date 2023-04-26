import React from 'react';
import { useState } from 'react';

function Tabs(props) { 
  
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
    return (
        <div className="tabs">
              <ul className="tabs__list">
                {props.tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`tabs__item ${index === activeTab ? 'tabs__item--active' : ''}`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
              <div className="tabs__content">
                {props.tabs[activeTab].content}
              </div>
            </div>
    );
}

export default Tabs;