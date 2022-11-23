
import { NextApiRequest, NextApiResponse } from 'next/types';
import { characters } from '../data/character';



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  ) {
    // http://localhost:3000/api/GetSpeelsByCharacterId/1
    const { characterId }: any = req.query
    let ID = parseInt(characterId)
    if (req.method === 'GET') {
        
        const test = characters.find(character => character.Id === ID)

        return res.status(200).json(test?.spells)
    }
  }