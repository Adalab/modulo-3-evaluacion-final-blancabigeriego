import CallToApi from '../services/CallToApi';
import CharacterList from './CharacterList';
import { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  //variables de estado
 const [dataList, setDataList] = useState([]);
  //useEffect
  useEffect(()=>{
    CallToApi().then(dataApi=>{
      console.log(dataApi);
      setDataList(dataApi);
    })
  },[]);
  return (
    <div>
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <CharacterList dataList={dataList} />
      </main>
    </div>
  );
}

export default App;

