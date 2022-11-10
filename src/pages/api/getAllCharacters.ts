// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CharactersType } from '../../types/D&D.type'
import { characters } from './data/character'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharactersType[]>
) {
  if (req.method === 'GET') {
  res.status(200).json(characters)
}
}
