import {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from "react-router-dom";

import ImageList from '../ImageList';
import Form from '../Form';





const port=8000;
function Home() {
  return (
    <div style={{backgroundColor:'#717282', padding:'10px', minHeight: '100vh'}}>
        <header>This is the home page</header>
        <Link to = "/GetPhotos">Get photos</Link>
    </div>
  )
}

export default Home;