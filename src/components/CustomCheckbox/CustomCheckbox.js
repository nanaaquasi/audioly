import React from 'react';

const CustomCheckbox = ({ type = 'checkbox', name, checked, onChange }) => {
  return (
    <>
      <input type={type} name={name} checked={checked} onChange={onChange} />
      <span className='checkmark'></span>
    </>
  );
};

export default CustomCheckbox;
