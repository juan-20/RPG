import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react'
import { Container } from '../../../styles/create.style';
import schema from '../../types/schema';

export default function createCharacter() {
  const { data  } = useSession({required: true})

  const userEmail = data?.user?.email

  function onSubmit(values: any) {
    console.log('SUBMIT', values);
  }

  const [isDev, setIsDev] = useState(true)

    return (
      
      <Container>
        {isDev? 
        <div className="center">
          <p>Em breve ⌛</p>
        </div>
          :
          <><Head>
          <title>Criar personagem</title>
        </Head><Formik
            onSubmit={onSubmit}
            validateOnMount
            validationSchema={schema}
            initialValues={{
              email: userEmail,
              mainAtributes: [{ name: 'Força' }, { name: 'Destreza' }, { name: 'Constituição' }, { name: 'Inteligência' }, { name: 'Sabedoria' }, { name: 'Carisma' }],
            }}
            render={({ values, errors, touched, isValid }) => (

              <>
                <div className="title">
                  <h1>Complete seu cadastro</h1>
                </div>

                <Form className='form'>
                  <h2>Informações basicas</h2>

                  <div className="personal-information">
                    <div className='form-content'>
                      <label>Imagem</label>
                      <div className="form-content-required">
                        <Field name="image" type="file" accept="image/*" />
                        <p> <ErrorMessage className='error' name="name" render={() => (<p>Nome deve ser válido</p>)} /> </p>
                      </div>
                    </div>
                    <div className='form-content'>
                      <label>Nome</label>
                      <div className="form-content-required">
                        <Field name="name" type="text" />
                        <p> <ErrorMessage className='error' name="name" render={() => (<p>Nome deve ser válido</p>)} /> </p>
                      </div>
                    </div>
                    <div className='form-content'>
                      <label>Idade</label>
                      <Field name="age" type="number" />
                      <p> <ErrorMessage className='error' name="age" /> </p>
                    </div>
                  </div>
                  <div className='form-content'>
                    <label>Armadura</label>
                    <Field name="armor" type="number" />
                    <p> <ErrorMessage className='error' name="armor" /> </p>
                  </div>
                  <div className='form-content'>
                    <label>Descrição</label>
                    <Field className="textarea" name="desc" type="string" />
                    <p> <ErrorMessage className='error' name="desc" /> </p>
                  </div>
                  <div className='form-content'>
                    <label>Deslocamento</label>
                    <Field name="displacement" type="string" />
                    <p> <ErrorMessage className='error' name="displacement" /> </p>
                  </div>
                  <div className='form-content'>
                    <label>Iniciativa</label>
                    <Field name="iniciative" type="number" />
                    <p> <ErrorMessage className='error' name="iniciative" /> </p>
                  </div>
                  <div className='form-content'>
                    <label>Vida</label>
                    <Field name="life" type="number" />
                    <p> <ErrorMessage className='error' name="life" /> </p>
                  </div>
                  <div className='form-content'>
                    <label>Dado de vida:</label>
                    <Field name="lifeDice" type="string" />
                    <p> <ErrorMessage className='error' name="lifeDice" /> </p>
                  </div>

                  <h2>Atributos</h2>
                  <div className="accordion">

                    <div className='strenght'>
                      <div className="text">
                        <label>Força</label>
                        <div className="text-description">
                          <span>Base:</span>
                          <span>Adicionador:</span>
                        </div>
                      </div>
                      <div className="input">
                        <div className="input-group">
                          <Field placeholder="Ex.: 12" name="mainAtributes.0.counter" type="string" />
                          <p><ErrorMessage className='error' name="mainAtributes.0.counter" /></p>
                        </div>
                        <div className="input-group">
                          <Field placeholder="Ex.: +5" name="mainAtributes.0.passive" type="string" />
                          <p> <ErrorMessage className='error' name="strengthBase" /> </p>
                        </div>
                      </div>
                    </div>


                    <div className='strenght'>
                      <div className="text">
                        <label>Destreza</label>
                        <div className="text-description">
                          <span>Base:</span>
                          <span>Adicionador:</span>
                        </div>
                      </div>
                      <div className="input">
                        <div className="input-group">
                          <Field placeholder="Ex.: 12" name="mainAtributes.1.counter" type="string" />
                          <p><ErrorMessage className='error' name="mainAtributes.1.counter" /></p>
                        </div>
                        <div className="input-group">
                          <Field placeholder="Ex.: +5" name="mainAtributes.1.passive" type="string" />
                          <p> <ErrorMessage className='error' name="strengthBase" /> </p>
                        </div>
                      </div>
                    </div>

                    <div className='strenght'>
                      <div className="text">
                        <label>Constituição</label>
                        <div className="text-description">
                          <span>Base:</span>
                          <span>Adicionador:</span>
                        </div>
                      </div>
                      <div className="input">
                        <div className="input-group">
                          <Field placeholder="Ex.: 12" name="mainAtributes.2.counter" type="string" />
                          <p><ErrorMessage className='error' name="mainAtributes.2.counter" /></p>
                        </div>
                        <div className="input-group">
                          <Field placeholder="Ex.: +5" name="mainAtributes.2.passive" type="string" />
                          <p> <ErrorMessage className='error' name="strengthBase" /> </p>
                        </div>
                      </div>
                    </div>

                    <div className='strenght'>
                      <div className="text">
                        <label>Inteligência</label>
                        <div className="text-description">
                          <span>Base:</span>
                          <span>Adicionador:</span>
                        </div>
                      </div>
                      <div className="input">
                        <div className="input-group">
                          <Field placeholder="Ex.: 12" name="mainAtributes.3.counter" type="string" />
                          <p><ErrorMessage className='error' name="mainAtributes.3.counter" /></p>
                        </div>
                        <div className="input-group">
                          <Field placeholder="Ex.: +5" name="mainAtributes.3.passive" type="string" />
                          <p> <ErrorMessage className='error' name="strengthBase" /> </p>
                        </div>
                      </div>
                    </div>

                    <div className='strenght'>
                      <div className="text">
                        <label>Sabedoria</label>
                        <div className="text-description">
                          <span>Base:</span>
                          <span>Adicionador:</span>
                        </div>
                      </div>
                      <div className="input">
                        <div className="input-group">
                          <Field placeholder="Ex.: 12" name="mainAtributes.4.counter" type="string" />
                          <p><ErrorMessage className='error' name="mainAtributes.4.counter" /></p>
                        </div>
                        <div className="input-group">
                          <Field placeholder="Ex.: +5" name="mainAtributes.4.passive" type="string" />
                          <p> <ErrorMessage className='error' name="strengthBase" /> </p>
                        </div>
                      </div>
                    </div>

                    <div className='strenght'>
                      <div className="text">
                        <label>Carisma</label>
                        <div className="text-description">
                          <span>Base:</span>
                          <span>Adicionador:</span>
                        </div>
                      </div>
                      <div className="input">
                        <div className="input-group">
                          <Field placeholder="Ex.: 12" name="mainAtributes.5.counter" type="string" />
                          <p><ErrorMessage className='error' name="mainAtributes.5.counter" /></p>
                        </div>
                        <div className="input-group">
                          <Field placeholder="Ex.: +5" name="mainAtributes.5.passive" type="string" />
                          <p> <ErrorMessage className='error' name="strengthBase" /> </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="footer">
                    <button onClick={() => console.log(values)} type="submit"
                    >Enviar</button>
                  </div>
                </Form>
              </>
            )} /></>
          }
       
      </Container>
    )

}
