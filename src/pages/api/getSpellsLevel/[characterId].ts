
import { ref, onValue } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../../services/firebase';
import { CharactersType } from '../../../types/D&D.type';

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
    let { characterId } : any = req.query
    // let magiclevel = parseInt(magicsLevel)
    let characterIdSearch = parseInt(characterId)

    let god: any = []
    let unique 

    if (req.method === 'GET') {
      // http://localhost:3000/api/getSpellsLevel/1
      
        const findCharacter = characters.find(character => character.Id === characterIdSearch)
        findCharacter?.spells.map((cantip) => {
          god.push(cantip.level)
          unique= [...new Set(god)]
          },
          )

        return res.status(200).json(unique)
    }else{
      return res.status(500).json(characters)
    }
  }