
import { ref, onValue } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../../../services/firebase';
import { CharactersType } from '../../../../types/D&D.type';
// import { characters } from '../../data/character';

let characters: CharactersType[] = []
const query = ref(db, "/characters");
onValue(query, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  characters = data

 })

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    let { TypeOfAttack, characterId } : any = req.query
    // let magiclevel = parseInt(magic)
    let characterIdSearch = parseInt(characterId)
    let data
    let arr: any =[]
    if (req.method === 'GET') {
          // http://localhost:3000/api/getTypeOfAttack/1/Spell
          // http://localhost:3000/api/getTypeOfAttack/1/Attack
        const findCharacter = characters.find(character => character.Id === characterIdSearch)
    
        findCharacter?.spells.map((attackType) => {
          let validator = attackType.typeOfAttack === TypeOfAttack
          if(validator === false) return
          arr.push(attackType)
          data= [...new Set(arr)]
        })
   
        return res.status(200).json(data)
    }
  }