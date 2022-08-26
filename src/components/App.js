import CallToApi from '../services/CallToApi';
import Filters from './Filters';
import CharacterList from './CharacterList';
import { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  //variables de estado
 const [dataList, setDataList] = useState([]);
 const [filteredName, setFilteredName] = useState("");
 const[filteredHouse, setFilteredHouse] = useState("Gryffindor");
 

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
  eachElement.image ="https://www.telasdeluna.com/18765-medium_default/tela-harry-potter-king-s-cross.jpg"
  // " https://via.placeholder.com/210x295/aabbcd/000000/?text=Harry-Potter"
};

};
setPlaceholder();

//funciones lifting

const handleInputName = (data)=>{
  setFilteredName(data);

};
const handleHouseSelect = (data)=>{
  setFilteredHouse(data);
};



  return (
    <div>
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <Filters dataList={dataList} handleInputName={handleInputName} filteredHouse={filteredHouse}
        handleHouseSelect={handleHouseSelect}/>
        <CharacterList dataList={dataList} filteredName={filteredName} filteredHouse={filteredHouse}/>
      </main>
    </div>
  );
}

export default App;

