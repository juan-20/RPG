
import { ref, onValue, endAt, query, startAfter, limitToLast, limitToFirst, orderByChild, startAt, orderByKey, equalTo, orderByValue } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../services/firebase';
import { SpellsProps } from '../../types/D&D.type';




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
    // http://localhost:3000/api/getAllNameSpells
    if (req.method === 'GET') {
        const Spellnames = characters.map((obj: SpellsProps) => obj.SpellName)
        return res.status(200).json(Spellnames)
    }else{
      return res.status(500).json({ "message": "erorr"})
    }
  }