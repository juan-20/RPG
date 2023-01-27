import { Books, ChatCircleText, CookingPot, Crosshair, MagicWand, Path, Timer } from 'phosphor-react'
import React from 'react'
import { GiFireSpellCast, GiSpellBook, GiSwordman } from 'react-icons/gi'
import { FaHandSparkles } from 'react-icons/fa'
import { Container } from './styles'
import { spellNameProps, SpellsProps } from '../../../types/D&D.type'

interface SpellsCard extends  SpellsProps {
}

function SpellsCard(props: SpellsCard) {
  const {
    Concentration,
    Description,
    Duration,
    Level,
    Material,
    Reach,
    Ritual,
    School,
    Somatic,
    SpellName,
    Time,
    Verbal,
    } = props
  return (
    <Container className='SpellsCard'>
      <div className="header">
        <h2>{SpellName}</h2>
          <div className="header-school">
            <Books size={32} weight="fill" />
            <p>{School} {Level}</p>
          </div>
      </div>
      <div className="content">
        <div className="content-header">
          <div className="content-header-item">
            {Reach==='Pessoal' ? <GiSwordman size={24}/> 
            : <Path size={24} /> }
            <p>{Reach}</p>
          </div>
          <div className="content-header-item">
            <Timer size={24} />
            <p>{Duration}</p>
          </div>
          <div className="content-header-item">
            <GiFireSpellCast size={24} />
            <p>{Time}</p>
          </div>

          {Ritual ?
          <div className="content-header-item ">
              <CookingPot size={24} weight='fill' />
              <p>Ritual</p>
          </div>
          : null}

          {Somatic ?
          <div className="content-header-item ">
              <FaHandSparkles size={24} />
              <p>Gestos</p>
          </div>
          : null}

          {Concentration ?
          <div className="content-header-item ">
              <Crosshair size={24} />
              <p>Concentração</p>
          </div>
          : null}

          {Verbal ?
          <div className="content-header-item ">
              <ChatCircleText size={24} weight="fill" />
              <p>Verbal</p>
          </div>
          : null}

        </div>

        <div className="content-body">
          {Material ?
          <div className="content-body-material">
            <span>Material:</span>
            <p>{Material}</p>
          </div>
          : null}

          <div className="">
            <p>{Description}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SpellsCard