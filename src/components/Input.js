import React, { forwardRef, useRef } from 'react';

const Input = forwardRef((props, inputRef) => {
  const {
    inputId,
    labelText,
    placeholderText,
    inputType,
    inputClassName,
    errorMessage,
  } = props;

  return (
    <div className='my-4'>
      <label htmlFor={inputId} className='py-2 text-md w-full'>
        {labelText}
      </label>
      <input
        id={inputId}
        className={`my-2 p-3 bg-light-black w-full rounded-md ${inputClassName}`}
        ref={inputRef}
        placeholder={placeholderText}
        type={inputType}
      />
      <p className='text-sm text-red-400'>{errorMessage}</p>
    </div>
  );
});

export default Input;
