import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const port=8000;
const options = [
  { value:'curiosity', label: 'Curiosity' },
  { value: 'opportunity', label: 'Opportunity' },
  { value: 'spirit', label: 'Spirit' }
]

const getter = async (rover_name : string | null) => {
  try {
    console.log(rover_name)
    let output= await axios.get(`http://localhost:${port}/rover/${rover_name}`);
    console.log(output.data)
    return(output.data)
  } catch (error) {
      //redirect if an incorrect link is used
      console.log(error)
  }
}

const Form = () => {
 const  [image_list,setImageList]=useState(null);
 const [rover_name, setRoverName]:[string | null, any]=useState(null)


  useEffect(()=> {
    (async() =>{
    if (rover_name){
    let result = await getter(rover_name);
    setImageList(result);}
    })();
  },[rover_name])

  const outputImageList=(image_list : string[]|null) => {
      if (image_list) {
        const images = image_list.map((image) => <img src={image}/>)
        return(images)}
      else{return(<></>)}}
    
  return (
    <>
    <div>
      <Select onChange={(choice) => setRoverName(choice ? choice.value:null)} options={options} />
    </div>
    <div>
      <p>{image_list ? `Here is the most recent image from ${rover_name}` : 'Loading Images...'}</p>
    
      {outputImageList(image_list)}
    </div>
    </>
  );
};

export default Form;
