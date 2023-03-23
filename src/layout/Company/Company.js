import React from 'react';
// import PlusSvg from '../../image/icon-plus';

const Company = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrementClick = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const handleDecrementClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="company">
      <h1 className="company__title">Fall Limited Edition Sneakers</h1>
      <p className="company__text">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <h2 className="company__price">
        125$
        <h3>250$</h3>
        <span>50%</span>
      </h2>
      <h4>{count}</h4>
      <button className="button__counter" onClick={handleIncrementClick}>
        +
      </button>
      <button className="button__counter" onClick={handleDecrementClick}>
        -
      </button>
    </div>
  );
};

export default Company;
