// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SpellsType } from '../../types/D&D.type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpellsType[]>
) {
  res.status(200).json([
    { 
     name: 'Bruxaria',
     id: 1,
     description: 'Você coloca uma maldição em uma criatura que você possa ver, dentro do alcance. Até a magia acabar, você causa 1d6 de dano necrótico extra no alvo sempre que atingi-lo com um ataque. Além disso, escolha uma habilidade quando você conjurar a magia. O alvo tem desvantagem em testes de habilidade feitos com a habilidade escolhida. Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, em um turno subsequente, para amaldiçoar outra criatura. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.',
     distance: {
      quantity: '18 metros',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     type: {
      quantity: 'Ação bônus',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     },
     duration: {
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
      quantity: '1 hora'
     }
    },
    { 
     name: 'Contramágica',
     id: 2,
     description: 'Reação que você realiza quando vê uma criatura a até 18 metros conjurando uma magia. Você tenta interromper uma criatura no processo de conjuração de uma magia. Se a criatura estiver conjurando uma magia de 3° nível ou inferior, a magia falha e não gera nenhum efeito. Se ela estiver conjurando uma magia de 4° nível ou superior, faça um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Caso seja bem sucedido, a magia da criatura falha e não gera nenhum efeito.',
     distance: {
      quantity: '18 metros',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
      quantity: 'Instantânea'
     },
     type: {
      quantity: '1 reação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
    { 
     name: 'Medo',
     id: 3,
     description: 'Você projeta uma imagem fantasmagórica dos piores medos de uma criatura. Cada criatura num cone de 9 metros, deve ser bem sucedida num teste de resistência de Sabedoria ou largara o que quer que esteja segurando e ficará amedrontada pela duração. Enquanto estiver amedrontada por essa magia, uma criatura deve usar a ação de Disparada e fugir de você pela rota mais curta disponível em cada um dos turnos dela, a não ser que não haja lugar para onde se mover. Se a criatura terminar o turno dela em um local onde ela não tenha linha de visão sua, a criatura pode realizar um teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina naquela criatura.',
     distance: {
      quantity: 'Pessoal',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      quantity: 'até 1 minuto',
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
     },
     type: {
      quantity: '1 ação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
    { 
     name: 'Toque Vampírico',
     id: 4,
     description: 'O toque da sua mão coberta de sombras pode drenar a força vital dos outros para curar seus ferimentos. Realize um ataque corpo-a-corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida igual à metade do dano necrótico causado. Até a magia acabar, você pode realizar o ataque novamente, no seu turno, com uma ação. Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.',
     distance: {
      quantity: 'Pessoal',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      quantity: 'até 1 minuto',
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
     },
     type: {
      quantity: '1 ação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
    { 
     name: 'Voo',
     id: 5,
     description: 'Você toca uma criatura voluntária. O alvo ganha deslocamento de voo de 18 metros, pela duração. Quando a magia acabar, o alvo cai se ainda estiver no ar, a não ser que ele possa impedir a queda. Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 3°.',
     distance: {
      quantity: 'Toque',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      quantity: 'até 10 minuto',
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
     },
     type: {
      quantity: '1 ação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
    { 
     name: 'Porta Dimensional',
     id: 6,
     description: 'Você se teletransporte da sua posição atual para qualquer local dentro do alcance. Você aparece exatamente no local desejado. Pode ser um lugar que você possa ver, um que você possa visualizar ou um que você possa descrever indicando a distância e direção, como “60 metros diretamente pra baixo” ou “90 metros, subindo para noroeste num ângulo de 45 graus”. Você pode levar objetos com você, contanto que o peso deles não exceda o que você pode carregar. Você também pode levar uma criatura voluntária do seu tamanho ou menor, que esteja carregando equipamento até o limite da capacidade de carga dela. A criatura deve estar a 1,5 metro de você quando você conjurar a magia. Se você aparecer em um lugar que já esteja ocupado por um objeto ou uma criatura, você e qualquer criatura viajando com você, sofrem 4d6 de dano de energia cada um e a magia falha em teletransportar vocês. ',
     distance: {
      quantity: '150 metros',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      quantity: 'Instantânea',
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
     },
     type: {
      quantity: '1 ação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
    { 
     name: 'Invisibilidade',
     id: 7,
     description: 'Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia.Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um alvo adicional para cada nível do espaço acima do 2°.',
     distance: {
      quantity: 'Toque',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      quantity: 'até 1 hora',
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
     },
     type: {
      quantity: '1 ação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
    { 
     name: 'Malogro',
     id: 8,
     description: 'Energia necromântica inunda uma criatura, à sua escolha, que você possa ver dentro do alcance, drenando sua umidade e vitalidade. O alvo deve realizar um teste de resistência de Concentração. O alvo sofre 8d8 de dano necrótico se falhar no teste, ou metade desse dano se obtiver sucesso. Essa magia não surte efeito em mortos- vivos ou constructos.Se você afetar uma criatura planta ou planta mágica, ela faz seu teste de resistência com desvantagem e a magia causa o máximo de dano a ela. Se você afetar uma planta não-mágica que não seja uma criatura, como uma árvore ou arbusto, ele não faz um teste de resistência; ela simplesmente seca e morre. Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.',
     distance: {
      quantity: '9 metros',
      url: 'https://avribacki.gitlab.io/magias5e/img/range.svg'
     },
     duration: {
      quantity: 'Intantânea',
      url: 'https://avribacki.gitlab.io/magias5e/img/duration.svg',
     },
     type: {
      quantity: '1 ação',
      url: 'https://avribacki.gitlab.io/magias5e/img/cast.svg'
     }
    },
  ])
}
