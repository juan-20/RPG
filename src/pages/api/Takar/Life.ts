// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { LifeType, TakarType } from '../../../types/D&D.type'

let life = {
    totalLife: 54,
    AtualLife: 54,
    dice: '7d8'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LifeType>
) {
    if(req.method === 'GET'){
        res.status(200).json(life)
    }else if (req.method === 'POST'){
        const newLife = req.body.life
        life = {
            totalLife: 54,
            AtualLife: newLife,
            dice: '7d8'
        }
        res.status(201).json(life)
    }
}
