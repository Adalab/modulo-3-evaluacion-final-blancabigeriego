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

  //funciones
const setPlaceholder =()=>{
 const elementsNoPicture= dataList.filter( character=>character.image === "");
  
for (let eachElement of elementsNoPicture){
  eachElement.image =" https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
};

};
setPlaceholder();



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

