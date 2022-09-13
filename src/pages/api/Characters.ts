// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CharactersType } from '../../types/D&D.type'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharactersType>
) {
  res.status(200).json({
      "Characters": [
          {
            Id: 1,
            name: 'Takar',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            weapons: [
                {
                id: 1,
                weaponName: "katana",
                weaponType: "Espada Longa",
                dice: "1d10 + 10"
                },
                {
                id: 2,
                weaponType: "Adaga",
                dice: "1d1"
                },
            ]
        }
    ]
  })
}
