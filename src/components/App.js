import CallToApi from '../services/CallToApi';
import { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {

  //useEffect
  useEffect(()=>{
    CallToApi().then(dataApi=>{
      console.log(dataApi);
    })
  },[]);
  return (
    <h1>Hola mundo</h1>
  );
}

export default App;

