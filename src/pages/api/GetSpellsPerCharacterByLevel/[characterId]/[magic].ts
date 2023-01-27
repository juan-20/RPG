
import { ref, onValue } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../../../services/firebase';
import { CharactersType } from '../../../../types/D&D.type';
// import { characters } from '../../data/character';

let characters: CharactersType[] = []
const query = ref(db, "/characters");
onValue(query, (snapshot) => {
  const data = snapshot.val();
  characters = data

 })



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    let { magic, characterId } : any = req.query
    let magiclevel = parseInt(magic)
    let characterIdSearch = parseInt(characterId)
    let data
    let arr: any =[]
    if (req.method === 'GET') {
          // http://localhost:3000/api/GetSpellsPerCharacterByLevel/1/0
        const findCharacter = characters.find(character => character.Id === characterIdSearch)
        findCharacter?.spells.map((characterAttack) => {
          let validator = characterAttack.level === magiclevel
          if(validator === false) return
          arr.push(characterAttack)
          data= [...new Set(arr)]
        })
   
        return res.status(200).json(data)
    }else{
      return res.status(500).json(characters)
    }
  }