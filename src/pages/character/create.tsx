import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react'
import { Container } from '../../../styles/create.style';
import schema from '../../types/schema';

export default function createCharacter() {
  const {data: session  } = useSession({required: true})

  function onSubmit(values: any) {
    console.log('SUBMIT', values);
  }
  return (
    <Container>
       <Head>
            <title>Criar personagem</title>
          </Head>
       <Formik
        onSubmit={onSubmit}
        validateOnMount
        validationSchema={schema}
        initialValues={{
          name: '',
          email: '',
        }}
        render={({ values, errors, touched, isValid }) => (
         
          <>
          <div className="title">
          <h1>Complete seu cadastro</h1>
          <p>blablablablablablablablablablablablablablablablablablablablablablablabla</p>
          </div>

          <Form className='form'>
              <h2>Informações basicas</h2>
      
            <div className="personal-information">
            <div className='form-content'>
              <label>Imagem</label>
              <div className="form-content-required">
                <Field name="name" type="file" accept="image/*" />
                <p> <ErrorMessage className='error' name="name" render={() => ( <p>Nome deve ser válido</p>)} /> </p>
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
              <Field name="dis" type="string" />
              <p> <ErrorMessage className='error' name="dis" /> </p>
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

            <h1>Atributos</h1>
            <div className="accordion">
              <div className='strnght'>
                <label>Força:</label>
                <Field placeholder="" name="strengthAdder" type="string" />
                <p> <ErrorMessage className='error' name="strengthAdder" /> </p>
                <Field placeholder="" name="strengthBase" type="string" />
                <p> <ErrorMessage className='error' name="strengthBase" /> </p>
              </div>
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
          </>
        )}
      />
    </Container>
  )
}
