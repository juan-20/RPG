// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ref, onValue } from 'firebase/database';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../services/firebase';
import { CharactersType } from '../../types/D&D.type'
// import { characters } from './data/character'

let characters: CharactersType[] = []
const query = ref(db, "/characters");
onValue(query, (snapshot) => {
  const data = snapshot.val();
  characters = data

 })

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharactersType[]>
) {
  if (req.method === 'GET') {
  res.status(200).json(characters)
}
}
