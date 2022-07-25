// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type IconType ={
  url: string,
  quantity: string
}

type Magic = {
  name: string,
  id: number
  description: string,
  type: IconType,
  distance: IconType,
  duration: IconType
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Magic[]>
) {
  res.status(200).json([
    {
        name: 'Rajada Mística',
        id: 1,
        description: 'Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.',
        distance: {
            quantity: '36 metros',
            url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
        },
        type: {
            quantity: '1 ação',
            url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
        },
        duration: {
            quantity: 'instantânea',
            url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
        }
    },
  ])
}
