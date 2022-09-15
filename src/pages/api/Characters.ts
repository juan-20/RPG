// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CharactersType } from '../../types/D&D.type'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharactersType[]>
) {
  res.status(200).json([
          {
            Id: 1,
            name: 'Takar',
            age: '61 anos e cabeça de 19',
            desc: "Um meio orc vindo da realeza de mor-oka e tem vivodo como um mercenario em busca de respostas após virar um bruxo",
            photo: {
              id: 1,
              url: 'https://cdn.discordapp.com/attachments/684162409937633291/871563174187520012/Takar_Token.png',
              desc: 'Meio Orc com uma arma nas costas'
            },
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
        },
          {
            Id: 2,
            name: 'Nephy',
            age: '61 anos e cabeça de 19',
            desc: "Um meio orc vindo da realeza de mor-oka e tem vivodo como um mercenario em busca de respostas após virar um bruxo",
            photo: {
              id: 1,
              url: 'https://cdn.discordapp.com/attachments/684162409937633291/871563174187520012/Takar_Token.png',
              desc: 'Meio Orc com uma arma nas costas'
            },
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
        },
    ])
}
