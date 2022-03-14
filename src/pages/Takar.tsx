import React from 'react';
import { BsHeart } from 'react-icons/bs';


import { Container, AttributeSquare, Caracteristics, Life, Skills } from '../../styles/takar';

const Takar: React.FC = () => {
    return (
        <Container>
            <div className="atribute">
                <AttributeSquare>
                    <h1>Força</h1>
                    <p>+2</p>
                    <span>14</span>
                </AttributeSquare>
                <AttributeSquare>
                    <h1>Destreza</h1>
                    <p>+1</p>
                    <span>11</span>
                </AttributeSquare>
                <AttributeSquare>
                    <h1>Constituição</h1>
                    <p>+2</p>
                    <span>15</span>
                </AttributeSquare>
                <AttributeSquare>
                    <h1>Inteligência</h1>
                    <p>+2</p>
                    <span>14</span>
                </AttributeSquare>
                <AttributeSquare>
                    <h1>Sabedoria</h1>
                    <p>-2</p>
                    <span>7</span>
                </AttributeSquare>
                <AttributeSquare>
                    <h1>Carisma</h1>
                    <p>+4</p>
                    <span>18</span>
                </AttributeSquare>
            </div>

            <Life>
                Ponto de vida máximo: 40
                <BsHeart size={64} color="red">
                </BsHeart>
                <input placeholder='40'></input>

                <span>5d8</span>
            </Life>

            <div className="atribute">
                <Caracteristics>
                    <h1>Iniciativa</h1>
                    <p>+1</p>
                </Caracteristics>
                <Caracteristics>
                    <h1>Deslocamento</h1>
                    <p>9m</p>
                </Caracteristics>
                <Caracteristics>
                    <h1>Sabedoria passiva(percepção):</h1>
                    <p>8</p>
                </Caracteristics>
            </div>

            <div className="skills">
                <Skills>
                    <h1>Força</h1>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <h1>Destreza</h1>
                    <p>+1</p>
                </Skills>
                <Skills>
                    <h1>Constituição</h1>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <h1>Inteligência</h1>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <h1>Sabedoria</h1>
                    <p>+1</p>
                </Skills>
                <Skills>
                    <h1>Carisma</h1>
                    <p>+7</p>
                </Skills>
            </div>

            <div className="skills-especific">
                <Skills>
                    <span>Acrobacia</span> <span>(des)</span>
                    <p>+1</p>
                </Skills>
                <Skills>
                    <span>Arcanismo</span> <span>(int)</span>
                    <p>+5</p>
                </Skills>
                <Skills>
                    <span>Atletismo</span> <span>(for)</span>
                    <p>+5</p>
                </Skills>
                <Skills>
                    <span>Atuação</span> <span>(car)</span>
                    <p>+4</p>
                </Skills>
                <Skills>
                    <span>Enganação</span> <span>(car)</span>
                    <p>+4</p>
                </Skills>
                <Skills>
                    <span>Furtividade</span> <span>(des)</span>
                    <p>+1</p>
                </Skills>
                <Skills>
                    <span>História</span> <span>(int)</span>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <span>Intimidação</span> <span>(car)</span>
                    <p>+7</p>
                </Skills>
                <Skills>
                    <span>Intuição</span> <span>(sab)</span>
                    <p>-2</p>
                </Skills>
                <Skills>
                    <span>Investigação</span> <span>(int)</span>
                    <p>+4</p>
                </Skills>
                <Skills>
                    <span>Lidar com animais</span> <span>(sab)</span>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <span>Medicina</span> <span>(sab)</span>
                    <p>-2</p>
                </Skills>
                <Skills>
                    <span>Natureza</span> <span>(int)</span>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <span>Percepção</span> <span>(sab)</span>
                    <p>-2</p>
                </Skills>
                <Skills>
                    <span>Persuasão</span> <span>(car)</span>
                    <p>+7</p>
                </Skills>
                <Skills>
                    <span>Presdigitação</span> <span>(des)</span>
                    <p>+1</p>
                </Skills>
                <Skills>
                    <span>Religião</span> <span>(int)</span>
                    <p>+2</p>
                </Skills>
                <Skills>
                    <span>Sobrevivência</span> <span>(sab)</span>
                    <p>-2</p>
                </Skills>
            </div>

        </Container >
    );
}

export default Takar;