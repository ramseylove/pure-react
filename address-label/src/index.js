import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel ({ mailingLabel }) {
  const { name, address, city, state, zipCode} = mailingLabel;
  return (
    <div className="addresslabel">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <div className="location">
        <span className="city">
          {city}
          </span>
          <span className="state">
          {state}
          </span>
          <span className="zipCode">
          {zipCode}
          </span>
      </div>
    </div>
  );
}



const testPerson = {
  name: 'Ryan Ramsey',
  address: '1234 Main st',
  city: 'Manitowoc',
  state: 'WI',
  zipCode: '54220'
}

ReactDOM.render(
  <AddressLabel mailingLabel={testPerson} />,
  document.getElementById('root')
)