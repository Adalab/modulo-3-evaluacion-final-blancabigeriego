import CallToApi from '../services/CallToApi';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import CharacterList from './CharacterList';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import '../styles/App.scss';
import { useLocation } from 'react-router-dom';
import { matchPath} from 'react-router-dom';



function App() {
  //variables de estado
 const [dataList, setDataList] = useState([]);
 const [filteredName, setFilteredName] = useState("");
 const[filteredHouse, setFilteredHouse] = useState("Gryffindor");
 

  //useEffect
  useEffect(()=>{
    CallToApi().then(dataApi=>{
     
      
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

//obtener id

const { pathname } = useLocation();

const dataPath = matchPath("/character/:characterId", pathname);

const characterId = dataPath !== null ? dataPath.params.characterId : null;

const characterFound = dataList.find(character =>  {return character.id === parseInt(characterId) });

console.log(characterFound)





  return (
    <div>
      <header>
        <h1>HARRY POTTER</h1>
        <Routes>
          <Route 
            path="/" 
            element={<><main>
            <Filters dataList={dataList} handleInputName={handleInputName} filteredHouse={filteredHouse}
            handleHouseSelect={handleHouseSelect}/>
            <CharacterList dataList={dataList} filteredName={filteredName} filteredHouse={filteredHouse}/>
          </main></>}/>
          <Route
            path="/character/:charId"
            element={
              <CharacterDetail character={characterFound} />
            }
            />

        </Routes>
      </header>
      
    </div>
  );
}

export default App;

