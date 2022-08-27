function CallToApi(){
    return fetch('https://hp-api.herokuapp.com/api/characters').then(response=>response.json())
    .then(data=>{
        const cleanedData = data.map((character, index)=>{
            return{
                name: character.name,
                image: character.image,
                alive: character.alive? "viv@" : "muert@",
                species:character.species,
                gender:character.gender,
                house: character.house,
                alt_name: character.alternate_name,
                id: index,

            }
        });
        
        return cleanedData;
    });
}

export default CallToApi;


//{"name":"Harry Potter","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"}
