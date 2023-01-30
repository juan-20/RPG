
import { ref, onValue, endAt, query, startAfter, limitToLast, limitToFirst, orderByChild, startAt, orderByKey, equalTo, orderByValue } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { db } from '../../../services/firebase';
import { SpellsProps } from '../../../types/D&D.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    // http://localhost:3000/api/getSpellsByName
    if (req.method === 'GET') {
    let { spellName } : any = req.query
    let characters: any = []
    const newSpell = query(ref(db, "/spells"),
    orderByChild('SpellName'), 
    equalTo(spellName),
    );
    onValue(newSpell, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      characters = data
      return res.status(200).json(Object.values(data))
     })
    }else{
      return res.status(500).json({ "message": "erorr"})
    }
  }