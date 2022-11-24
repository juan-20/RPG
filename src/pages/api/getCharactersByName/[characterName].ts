
import { onValue, ref } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../../services/firebase';
import { CharactersType } from '../../../types/D&D.type';

let characters: CharactersType[] = []
const query = ref(db, "/");
onValue(query, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  characters = data

 })

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    const { characterName } = req.query
    if (req.method === 'GET') {
        
        const test = characters.find(character => character.name === characterName)

        return res.status(200).json(test)
    }
  }