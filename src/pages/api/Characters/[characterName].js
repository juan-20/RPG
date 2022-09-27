
import { characters } from '../data/character';



export default function handler(
    req,
    res
  ) {
    const { characterName } = req.query
    if (req.method === 'GET') {
        console.log(characters);

        const test = characters.find(character => character.name === characterName)

        res.status(200).json(test)
    }
  }