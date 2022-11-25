
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
    // http://localhost:3000/api/GetCharactersById/1
    const { characterId }: any = req.query
    let ID = parseInt(characterId)
    if (req.method === 'GET') {
        
        const test = characters.find(character => character.Id === ID)

        return res.status(200).json(test)
    }
  }