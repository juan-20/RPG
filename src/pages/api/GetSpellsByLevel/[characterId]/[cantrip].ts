
import { NextApiRequest, NextApiResponse } from 'next/types';
import { characters } from '../../data/character';



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    let { cantrip, characterId } : any = req.query
    let magiclevel = parseInt(cantrip)
    let characterIdSearch = parseInt(characterId)
    if (req.method === 'GET') {
        
        const findCharacter = characters.find(character => character.Id === characterIdSearch)
        const cantripResponse = findCharacter?.spells.find(cantip => cantip.level === magiclevel )

        return res.status(200).json(cantripResponse)
    }
  }