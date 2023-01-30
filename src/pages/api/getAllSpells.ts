
import { ref, onValue, endAt, query, startAfter, limitToLast, limitToFirst, orderByChild, startAt, orderByKey } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../services/firebase';
import { CharactersType } from '../../types/D&D.type';




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    let characters: any = []
    const newSpell = query(ref(db, "/spells"));
    onValue(newSpell, (snapshot) => {
      const data = snapshot.val();
      characters = data
     })
    // http://localhost:3000/api/getAllSpells
    if (req.method === 'GET') {
        return res.status(200).json(characters)
    }else{
      return res.status(500).json({ "message": "erorr"})
    }
  }