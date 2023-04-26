import React from 'react';

function DiamondMaking({name, price}) {
    return (
        <div className="jmbenefits">
      <div className="jm-benfit-spcial">
        <span>20% OFF</span>
        <p>On {name}</p>
      </div>
      <div className="right">
        <div className="top">
        <div className="flex justify-between">
           <p>Maximum benefit up to  <span>{price}</span></p> 
            <input type="checkbox" />
          </div>

          <p>
            code : <span> HAPPYBUY10</span>
          </p>
        </div>
        <div className="bottom">
          <p>
            Expiry:
            <span>SEP 25 2022 | 11:59:00 PM</span>
          </p>
        
        </div>
      </div>
    </div>
    );
}

export default DiamondMaking;