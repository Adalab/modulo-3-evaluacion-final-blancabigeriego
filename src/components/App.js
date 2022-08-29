import CallToApi from '../services/CallToApi';
import Ls from '../services/ls';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import CharacterList from './CharacterList';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import '../styles/App.scss';
import { useLocation } from 'react-router-dom';
import { matchPath} from 'react-router-dom';
import '../styles/App.scss';
import '../styles/layout/mainapp.scss';
import logo from '../images/logoTitle.png';



function App() {
  //variables de estado
 const [dataList, setDataList] = useState([]);
 const [filteredName, setFilteredName] = useState("");
 const[filteredHouse, setFilteredHouse] = useState("Gryffindor");
 const [filteredSpecies, setFilteredSpecies] = useState("human");
 

  //useEffect
  useEffect(()=>{
    CallToApi().then(dataApi=>{
     
      const alpha = (x,y)=>{
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
      }

       dataApi.sort(alpha);
      
      
      setDataList(dataApi);
      

    })
    
    
  },[]);

  //funciones
const setPlaceholder =()=>{
 const elementsNoPicture= dataList.filter( character=>character.image === "");
  
for (let eachElement of elementsNoPicture){
  eachElement.image ="https://www.telasdeluna.com/18765-medium_default/tela-harry-potter-king-s-cross.jpg"
  
};

};
setPlaceholder();

//funciones lifting

const handleInputName = (data)=>{
  
  setFilteredName(data);
  Ls.set("name",data)

};
const handleHouseSelect = (data)=>{
  setFilteredHouse(data);
};

const handleSelect = (data) =>{
  setFilteredSpecies(data)
};

//obtener id

const { pathname } = useLocation();

const dataPath = matchPath("/character/:characterId", pathname);

const characterId = dataPath !== null ? dataPath.params.characterId : null;


const characterFound = dataList.find(character =>  {return character.id === parseInt(characterId) });







  return (
    <div>
      <header className='header'>
        <img className='header__logo'alt='Logo de Harry Potter'src={logo}/>

        </header>
        <main>
        <Routes>
          <Route 
            path="/" 
            element={<><main>
            <Filters 
            dataList={dataList} 
            handleInputName={handleInputName} 
            filteredHouse={filteredHouse}
            handleHouseSelect={handleHouseSelect}
            filteredSpecies={filteredSpecies}
            handleSelect={handleSelect}/>

            <CharacterList 
            dataList={dataList} 
            filteredName={filteredName} filteredHouse={filteredHouse}
            filteredSpecies={filteredSpecies}/>
          </main></>}/>
          <Route
            path="/character/:charId"
            element={
              <CharacterDetail character={characterFound} />
            }
            />

        </Routes>
        </main>
      
    </div>
  );
}

export default App;

