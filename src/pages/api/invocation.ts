// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { InvocationType } from '../../types/D&D.type'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InvocationType[]>
) {
  res.status(200).json([
    {
        name: 'Thirsting Blade',
        id: 1,
        description: 'You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.',
    },
    {
        name: 'Improved Pact Weapon',
        id: 2,
        description: 'You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells. In addition, the weapon gains a +1 bonus to its attack and damage rolls, unless it is a magic weapon that already has a bonus to those rolls.     Finally, the weapon you conjure can be a shortbow, longbow, light crossbow, or heavy crossbow.',
    },
  ])
}
