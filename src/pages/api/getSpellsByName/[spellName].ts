
import { ref, onValue, endAt, query, startAfter, limitToLast, limitToFirst, orderByChild, startAt, orderByKey, equalTo, orderByValue } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../../services/firebase';
import { SpellsProps } from '../../../types/D&D.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    let { spellName } : any = req.query
    let characters: any = []
    const newSpell = query(ref(db, "/spells"),
    orderByChild('SpellName'), 
    equalTo(spellName),
    );
    onValue(newSpell, (snapshot) => {
      const data = snapshot.val();
      characters = data
     })
    // http://localhost:3000/api/getSpellsByName
    if (req.method === 'GET') {
        return res.status(200).json(Object.values(characters))
    }else{
      return res.status(500).json({ "message": "erorr"})
    }
  }