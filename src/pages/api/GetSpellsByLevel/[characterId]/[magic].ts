
import { NextApiRequest, NextApiResponse } from 'next/types';
import { characters } from '../../data/character';



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
          // http://localhost:3000/api/GetSpellsByLevel/1/0
        const findCharacter = characters.find(character => character.Id === characterIdSearch)
        findCharacter?.spells.map((characterAttack) => {
          let validator = characterAttack.level === magiclevel
          if(validator === false) return
          arr.push(characterAttack)
          data= [...new Set(arr)]
        })
   
        return res.status(200).json(data)
    }
  }