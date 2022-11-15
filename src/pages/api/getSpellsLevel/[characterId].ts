
import { NextApiRequest, NextApiResponse } from 'next/types';
import { characters } from '../data/character';



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
    }
  }