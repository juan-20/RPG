import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../../styles/create.style';
import { CharactersType } from '../../types/D&D.type';
import { CharacterDefault } from '../api/data/character';

export default function Create() {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<CharactersType>();

  const [imgURL, setImgURL] = useState<string>();
  const [data, setData] = useState<CharactersType>(CharacterDefault);
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: string[] = ['Personal Information', 'Address Information'];

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgURL(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const handleNext = (): void => {
    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length === 0) {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    }
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // submit form data to backend API
  };

  console.log(data);

  const getTitle = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <strong>Força</strong>
      case 1:
        return <strong>Destreza</strong>
      case 2:
        return <strong>Constituição</strong>
      case 3:
        return <strong>Inteligência</strong>
      case 4:
        return <strong>Sabedoria</strong>
      case 5:
        return <strong>Carisma</strong>
    }
  }

  const getStepContent = (stepIndex: number): JSX.Element => {
    switch (stepIndex) {
      case 0:
        console.log(stepIndex);
        return (
          <div className="first-step">
          <div className="title">
            <h1>Informações básicas</h1>
          </div>
          <div className="input-group">
            <label htmlFor="name">Nome:</label>
            <input placeholder='Ex.: Grog' type="text" id="name" {...register('name', {
              required: true,
              maxLength: 20,
            })} />
            {errors?.name?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.name?.type === "maxLength" && (
              <p>O nome deve ter menos de 20 caracteres</p>
            )}
          </div>
  
          <div className="input-group">
            <label htmlFor="image">Imagem:</label>
            <input type="file" accept='image/*' {...register('photo.url',{
              required: true,
              maxLength: 200,
            })}  id="image" onChange={handleImageChange} />
            {errors?.photo?.url?.type === "required" && <p>Campo obrigatório</p>}
            {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
          </div>
  
          <div className="input-group">
            <label htmlFor="age">Idade:</label>
            <input placeholder='Ex.: 40' type="number" id="age" {...register('age',{
              required: true,
              maxLength: 90000,
            })} />
            {errors?.age?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.age?.type === "maxLength" && <p>Velho demais ein</p>}
          </div>
  
          <div className="input-group">
            <label htmlFor="armor">Armadura:</label>
            <input placeholder='Ex.: 17' type="number" id="armor" {...register('armor',{
              required: true,
              maxLength: 100,
            })} />
            {errors?.armor?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.armor?.type === "maxLength" && <p>Que tipo de multiclasse é essa??</p>}
          </div>
          
          <div className="input-group">
          <label htmlFor="description">Descrição:</label>
          <textarea placeholder='Ex.: Nascido em uma casa real...' id="description" {...register('desc',{
              required: true,
              maxLength: 1000,
            })} />
            {errors?.desc?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.desc?.type === "maxLength" && <p>Mucho texto</p>}
          </div>
  
          <div className="input-group">
          <label htmlFor="role">Classe:</label>
          <input placeholder='Ex.: Bruxo' id="role" {...register('role',{
              required: true,
              maxLength: 20,
            })} />
            {errors?.role?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.role?.type === "maxLength" && <p>Mucho texto</p>}
          </div>
  
          <div className="input-group">
            <label htmlFor="displacement">Deslocamento:</label>
            <input placeholder='Ex.: 9m/9ft' type="string" id="displacement" {...register('displacement',{
              required: true,
              maxLength: 20,
            })} />
            {errors?.displacement?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.displacement?.type === "maxLength" && <p>Mucho texto</p>}
          </div>
  
          <div className="input-group">
            <label htmlFor="initiative">Iniciativa:</label>
            <input placeholder='Ex.: +1' type="number" id="initiative" {...register('initiative',{
              required: true,
              maxLength: 20,
            })} />
            {errors?.initiative?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.initiative?.type === "maxLength" && <p>Mucho texto</p>}
          </div>
  
          <div className="input-group">
            <label htmlFor="life">Vida:</label>
            <input placeholder='Ex.: 90' type="number" id="life" {...register('life.life',{
              required: true,
              maxLength: 1000,
            })}  />
            {errors?.life?.life?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.life?.life?.type === "maxLength" && <p>Mucho texto</p>}
          </div>
  
          <div className="input-group">
            <label htmlFor="lifeDice">Life Dice:</label>
            <input placeholder='Ex.: 9d9' type="text" id="lifeDice" {...register('lifeDice',{
              required: true,
              maxLength: 5,
            })}   />
            {errors?.lifeDice?.type === "required" && <p>Campo obrigatório</p>}
            {errors?.lifeDice?.type === "maxLength" && <p>Mucho texto</p>}
          </div>
        </div>
        );
      case 1:
        console.log(stepIndex);
        return (
          <div className="second-step">
          {Array.from({ length: 6 }).map((_, index) => (
          <div className="saving" key={index}>
          
          <div>{getTitle(index)}</div>

          <div className='saving-input'>
          <label>Counter:</label>
          <input
            type="number"
            {...register(`mainAtributes.${index}.counter`, {
              required: true,
            })}
          />
          {errors.mainAtributes?.[index]?.counter && (
            <span>This field is required</span>
          )}

          </div>

          <div className='saving-input'>
            <label>Passive:</label>
            <input
              type="number"
              {...register(`mainAtributes.${index}.passive`, {
                required: true,
              })}
            />
            {errors.mainAtributes?.[index]?.passive && (
              <span>This field is required</span>
            )}
          </div>

        </div>
      ))}
      </div>
        );
      default:
        return <div>Unknown stepIndex</div>;
    }
  };

  return (
    <Container onSubmit={handleSubmit((data) => setData(data))}>
        <div>{getStepContent(activeStep)}</div>
        <div className='button-group'>
            <button disabled={activeStep === 0} onClick={handleBack}>
              Voltar
            </button>
            <button disabled={activeStep === steps.length - 1} onClick={handleNext}>
              Próximo
            </button>
            {activeStep === 1 ?
            <button type="submit">Submit</button> : null
            }
        </div>

    </Container>
  );
}