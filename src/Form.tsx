import React, { useState, useEffect } from 'react';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const Form = () => {


  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default Form;