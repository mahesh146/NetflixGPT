import React from 'react';

const Button = (props) => {
  const { buttonType, buttonText, className } = props;

  return (
    <div className='my-4 w-full'>
      <button
        className={`py-2 bg-red-600 rounded-lg ${className}`}
        type={buttonType}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
