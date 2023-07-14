import {useState, useEffect} from 'react';
import axios from 'axios';

import ImageList from '../ImageList';
import Form from '../Form';



const port=8000;
function GetPhotos() {
  const  [image_list,setImageList]=useState(null);
  const [rover_name, setRoverName]:[string | null, any]=useState(null)
  const [image_status, setImageStatus]:[string,any]=useState('select a name to add an image')


  const getter = async (rover_name : string | null) => {
    try {
      console.log(rover_name)
      let output= await axios.get(`http://localhost:${port}/rover/${rover_name}`);
      console.log(output.data)
      return(output.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=> {
    (async() =>{
    if (rover_name){
    setImageStatus(`Loading ${rover_name}`)
    let result = await getter(rover_name);
    setImageList(result);
    setImageStatus(`got the photos from ${rover_name}`)
  }
    })();
  },[rover_name])

  return (
    <div style={{backgroundColor:'#717282', padding:'10px', minHeight: '100vh'}}>
  <Form onChange={(choice : any) => setRoverName(choice ? choice.value:null)}/>
  <p>{image_status}</p>
  <ImageList image_list={image_list}/>
  </div>
  )
}

export default GetPhotos;