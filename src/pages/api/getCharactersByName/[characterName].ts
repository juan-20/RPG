
import { NextApiRequest, NextApiResponse } from 'next/types';
import { characters } from '../data/character';



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