import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, AttributeSquare, Caracteristics, Life, Skills, Spells } from '../../styles/takar';

const Takar: React.FC = () => {

    const [damage, setDamage]: any = useState();
    const [life, setLife]: any = useState(40);


    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                <p>Ponto de vida máximo: 40</p>
                <div className="heart">
                    <BsHeart size={64} color="red">
                    </BsHeart>
                    <span>Dano:</span>
                    <input
                        value={damage}
                        onChange={event => setDamage(event.target.value)}
                        placeholder='0-40'>
                    </input>

                    <span> Vida: {life} </span>

                </div>
                <p>5d8</p>

                <button
                    className='damage'
                    onClick={() => {
                        const lifeLocal: any = localStorage.getItem('health');
                        console.log("Você levou: ", damage, " de dano");
                        if (lifeLocal < 0) {
                            toast.error('Você caiu camarada', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                        if (lifeLocal) {
                            let lifeDamaged: number = lifeLocal - damage;
                            localStorage.setItem('health', lifeDamaged.toString());
                            toast.warn(({ data }) => `Essa doeu. Agora está com ${data} de vida`, {
                                data: lifeDamaged,
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            const updatedLife = lifeDamaged
                            setLife(updatedLife)
                            console.log(life)
                        } else {
                            let lifeDamaged: number = 40 - damage;
                            console.log(lifeDamaged);
                            localStorage.setItem('health', lifeDamaged.toString())

                            toast.warn("Tomou seu primeiro dano :(", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });

                            const updatedLife = lifeDamaged
                            setLife(updatedLife)
                            console.log(life)
                        }
                    }}>
                    Tomar dano
                </button>

                <button
                    className='sleep'
                    onClick={() => {
                        let lifeDamaged: any = 40;
                        lifeDamaged = localStorage.setItem('health', lifeDamaged)

                        toast.success('Dormiu e recuperou sua vida.', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }}>
                    Descanso longo
                </button>
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
                <Caracteristics>
                    <h1>Classe de armadura:</h1>
                    <p>16</p>
                </Caracteristics>
                <Caracteristics>
                    <h1>CD para evitar magia:</h1>
                    <p>15</p>
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

            <div className="spells">
                <div className="spells-title">
                    <h1>Truques</h1>
                </div>

                <Spells>
                    <h1>Prestidigitação</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação </p>

                    <span> Alcance:  </span> <p>10 pés </p>

                    <span> Componentes: </span> <p> V S </p>
                    <span> Duração: </span> <p> 1 horas </p>

                    <p className='description'>Este feitiço é um pequeno truque mágico que conjuradores novatos usam para praticar. Você cria um dos seguintes efeitos mágicos dentro do alcance:
                        <br />
                        Você cria, instantaneamente, um efeito sensorial inofensivo, como uma chuva de faíscas, um sopro de vento, notas musicais suaves ou um odor estranho.
                        <br />
                        Você, instantaneamente, acende ou apaga uma vela, uma tocha ou uma pequena fogueira.
                        <br />
                        Você, instantaneamente, limpa ou suja um objeto de até 1 metro cúbico.
                        <br />
                        Você esfria, esquenta ou melhora o sabor de até 1 metro cubico de matéria inorgânica por 1 hora.
                        <br />
                        Você faz uma cor, uma pequena marca ou um símbolo aparecer em um objeto ou superfície por 1 hora.
                        <br />
                        Você cria uma bugiganga não-mágica ou uma imagem ilusória que caiba na sua mão e que dura até o final do seu próximo turno.
                        <br />
                        Se você conjurar essa magia diversas vezes, você pode ter até três dos seus efeitos não-instantâneos ativos, ao mesmo tempo, e você pode dissipar um desses efeitos com uma ação.</p>
                </Spells>

                <Spells>
                    <h1>Rajada Mística</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação </p>

                    <span> Alcance:  </span> <p>120 pés </p>

                    <span> Componentes: </span> <p> V S </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia
                        <br />
                        A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.
                    </p>

                </Spells>

                <Spells>
                    <h1>Ilusão Menor</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação </p>

                    <span> Alcance:  </span> <p>30 pés </p>

                    <span> Componentes: </span> <p>  S M </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>
                        Você cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela duração. A ilusão também termina se você dissipa-la usando uma ação ou conjurar essa magia novamente.
                        <br />
                        Se você criar um som, seu volume pode variar entre um sussurro até um grito. Pode ser a sua voz, a voz de outrem, o rugido de um leão, batidas de tambor ou qualquer outro som que você quiser. O som permanece no mesmo volume durante toda duração ou você pode fazer sons distintos em momentos diferentes, antes da magia acabar.
                        <br />
                        Se você criar uma imagem de um objeto – como uma cadeira, pegadas de lama ou um pequeno baú – ela não pode ter mais de 1,5 metro cúbico [5-foot cube]. A imagem não pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Interação física com a imagem revelará que ela é uma ilusão, já que as coisas podem atravessa-la.
                        <br />
                        Se uma criatura usar sua ação para examinar a imagem, ela pode determinar que ela é uma ilusão se obtiver sucesso num teste de Inteligência (Investigação) contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a ilusão se tornará suave para a criatura.
                    </p>

                </Spells>

            </div>
            <div className="spells">
                <div className="spells-title">
                    <h1>Mágias</h1>
                </div>

                <Spells>
                    <h1>Escudo Arcano</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 reação, que você faz quando é atingido por um ataque ou alvo da magia mísseis mágicos </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p> V S </p>
                    <span> Duração: </span> <p> 1 rodada </p>

                    <p className='description'>
                        Uma barreira de energia invisível aparece e protege você. Até o início do seu próximo turno, você recebe +5 de bônus na CA, incluindo contra o ataque que desencadeou a magia, e você não sofre dano de mísseis mágicos.
                    </p>
                </Spells>
                <Spells>
                    <h1>Destruição Colérica</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação bônus </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p> V </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>
                        Da próxima vez que você atingir com um ataque corpo-a- corpo com arma enquanto essa magia durar, seu ataque causará 1d6 de dano psíquico extra. Além disso, se o alvo for uma criatura, ele deve realizar um teste de resistência de Sabedoria ou ficará amedrontado por você até a magia acabar. Com uma ação, a criatura pode realizar um teste de resistência de Sabedoria contra a CD da magia para se manter resoluto e terminar a magia.
                    </p>
                </Spells>
                <Spells>
                    <h1>Repreensão infernal</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 reação  </p>

                    <span> Alcance:  </span> <p> 18 metros </p>

                    <span> Componentes: </span> <p> V, S </p>
                    <span> Duração: </span> <p> instantânea </p>

                    <p className='description'>
                        Reação que você faz em resposta ao sofre dano de uma criatura a até 18 metros de você e que você possa ver.
                        Você aponta seu dedo e a criatura que causou dano a você é, momentaneamente, envolta por chamas infernais. A criatura deve realizar um teste de resistência de Destreza. Ela sofre 2d10 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso
                        <br />
                        Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1°.

                    </p>
                </Spells>
                <Spells>
                    <h1>Armadura de Agathys</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p> V, S , M </p>
                    <span> Duração: </span> <p> 1 hora </p>

                    <p className='description'>
                        Uma força magica protetora envolve você, manifestando- se como um frio espectral que cobre você e seu equipamento. Você ganha 5 pontos de vida temporários pela duração. Se uma criatura atingir você com um ataque corpo-a-corpo enquanto estiver com esses pontos de vida, a criatura sofrerá 5 de dano de frio.
                        <br />
                        Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, tanto os pontos de vida temporários quanto o dano de frio aumentam em 5 para cada nível do espaço acima do 1°

                    </p>
                </Spells>
                <Spells>
                    <h1>Nublar</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p> V </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>
                        Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver você. Pela duração, qualquer criatura terá desvantagem nas jogadas de ataque contra você. Um atacante é imune a esse efeito se não depender de visão, como os que tenham percepção às cegas ou os que puderem ver através de ilusões, como os com visão verdadeira.
                        <br />
                    </p>
                </Spells>
                <Spells>
                    <h1>Marca da Punição</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação bônus  </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p> V </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>
                        Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, a arma cintilará com radiação astral quando você golpear. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível, se estava invisível, e o alvo emite penumbra em um raio de 1,5 metro e não pode ficar invisível até a magia acabar.
                        <br />
                        Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano extra aumenta em 1d6 para cada nível do espaço acima do 2°.
                    </p>
                </Spells>
                <Spells>
                    <h1>Invisibilidade</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> toque </p>

                    <span> Componentes: </span> <p> V, S, M </p>
                    <span> Duração: </span> <p> 1 hora </p>

                    <p className='description'>
                        Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia.
                        <br />
                        Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um alvo adicional para cada nível do espaço acima do 2°.
                    </p>
                </Spells>
                <Spells>
                    <h1>Coroa da Loucura</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> 36 metros </p>

                    <span> Componentes: </span> <p> V, S </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>
                        Um humanoide, à sua escolha, que você possa ver dentro do alcance, deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Enquanto o alvo estiver enfeitiçado dessa forma, uma coroa retorcida de ferro denteado aparece na cabeça dele e a loucura brilha em seus olhos.
                        <br />
                        A criatura enfeitiçada deve usar sua ação antes de se mover, em cada um dos turnos dela, para realizar um ataque corpo-a-corpo contra uma criatura, diferente de si mesma, que você escolher mentalmente.
                        <br />
                        O alvo pode agir normalmente no turno dele se você não escolher uma criatura ou se você não estiver dentro do alcance.
                        <br />
                        Nos seus turnos subsequentes, você deve usar sua ação para manter o controle sobre o alvo, ou a magia termina. Igualmente, o alvo pode realizar um teste de resistência de Sabedoria no final de cada um dos turnos dele. Se obtiver sucesso, a magia termina.
                    </p>
                </Spells>
                <Spells>
                    <h1>Piscar</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p> V, S </p>
                    <span> Duração: </span> <p> 1 minuto </p>

                    <p className='description'>
                        Role um d20 no final de cada um dos seus turnos pela duração da magia. Com um resultado de 11 ou maior, você desaparece do seu plano de existência atual e reaparece no Plano Etéreo (a magia falha e a conjuração é perdida se você já estiver nesse plano). No início do seu próximo turno e quando a magia terminar, se você estiver no Plano Etéreo, você retorna a um espaço desocupado de sua escolha que você possa ver a até 3 metros do espaço em que você desapareceu. Se não houver um espaço disponível dentro do alcance, você reaparece no espaço desocupado mais próximo (escolhido aleatoriamente, se existir mais de um espaço a mesma distância). Você pode dissipar a magia com uma ação.
                        <br />
                        Quando estiver no Plano Etéreo, você pode ver e ouvir o plano de onde você veio, que aparece em tons de cinza, e você não pode ver nada além de 18 metros. Você só pode afetar ou ser afetado por outras criaturas no Plano Etéreo. As criaturas que não estiverem lá não podem notar você nem interagir com você, a não ser que elas tenham uma habilidade que as permita.

                    </p>
                </Spells>
                <Spells>
                    <h1>Arma Elemental</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> toque </p>

                    <span> Componentes: </span> <p> V, S </p>
                    <span> Duração: </span> <p> 1 hora </p>

                    <p className='description'>
                        Uma arma não-mágica que você tocar se torna uma arma mágica. Escolha um dos tipos de dano a seguir: ácido, elétrico, frio, fogo ou trovejante. Pela duração, a arma tem +1 de bônus nas jogadas de ataque e causa 1d4 de dano extra, do tipo de elemento escolhido, ao atingir.
                        <br />
                        Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° ou 6° nível, o bônus nas jogadas de ataque aumenta pra +2 e o dano extra aumenta para 2d4. Quando você usar um espaço de magia de 7° nível ou superior, o bônus aumenta para +3 e o dano extra aumenta para 3d4.
                    </p>
                </Spells>
                <Spells>
                    <h1>Contramágica</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 reação  </p>

                    <span> Alcance:  </span> <p> 18 metros </p>

                    <span> Componentes: </span> <p> S </p>
                    <span> Duração: </span> <p> instantânea </p>

                    <p className='description'>
                        Reação que você realiza quando vê uma criatura a até 18 metros conjurando uma magia.

                        Você tenta interromper uma criatura no processo de conjuração de uma magia. Se a criatura estiver conjurando uma magia de 3° nível ou inferior, a magia falha e não gera nenhum efeito. Se ela estiver conjurando uma magia de 4° nível ou superior, faça um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Caso seja bem sucedido, a magia da criatura falha e não gera nenhum efeito.
                        <br />
                        Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a magia interrompida não vai gerar efeito se o nível dela for menor ou igual ao nível do espaço de magia que você usar.
                    </p>
                </Spells>
                <Spells>
                    <h1>Toque Vampírico</h1>

                    <span> Tempo De Conjuração:  </span> <p> 1 ação  </p>

                    <span> Alcance:  </span> <p> pessoal </p>

                    <span> Componentes: </span> <p>  VS </p>
                    <span> Duração: </span> <p> 1 minutos </p>

                    <p className='description'>
                        O toque da sua mão coberta de sombras pode drenar a força vital dos outros para curar seus ferimentos. Realize um ataque corpo-a-corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida igual à metade do dano necrótico causado. Até a magia acabar, você pode realizar o ataque novamente, no seu turno, com uma ação.
                        <br />
                        Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.
                    </p>
                </Spells>


            </div>

        </Container >
    );
}

export default Takar;