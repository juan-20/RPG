import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../../styles/create.style';

export default function Create() {
  const { register, handleSubmit } = useForm();

  const [steper, setStepper] = useState(1)
  const [imgURL, setImgURL] = useState<string>();

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

  const onSubmit = (data: any) => {
    console.log(data);
    // submit form data to backend API
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {steper === 1 ?
      <div className="first-step">
        <div className="title">
          <h1>Informacoes basicas</h1>
        </div>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register('name')} />
        </div>

        <div className="input-group">
          <label htmlFor="image">Image:</label>
          <input type="file" accept='image/*' id="image" onChange={handleImageChange}
          //  {...register('image')} 
           />
          {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
        </div>

        <div className="input-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" {...register('age')} />
        </div>

        <div className="input-group">
          <label htmlFor="armor">Armor:</label>
          <input type="text" id="armor" {...register('armor')} />
        </div>
        
        <div className="input-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register('description')} />
        </div>

        <div className="input-group">
          <label htmlFor="displacement">Displacement:</label>
          <input type="number" id="displacement" {...register('displacement')} />
        </div>

        <div className="input-group">
          <label htmlFor="initiative">Initiative:</label>
          <input type="number" id="initiative" {...register('initiative')} />
        </div>

        <div className="input-group">
          <label htmlFor="life">Life:</label>
          <input type="number" id="life" {...register('life')} />
        </div>

        <div className="input-group">
          <label htmlFor="lifeDice">Life Dice:</label>
          <input type="text" id="lifeDice" {...register('lifeDice')} />
        </div>
        <button onClick={()=> {setStepper(steper+1)}}>Próximo</button>
      </div>
      : 
      <div>
        <p>Força:</p>
        <div>
          <label htmlFor="base">Base:</label>
          <input type="number" id="base" {...register('base')} />
        </div>
        <div>
          <label htmlFor="adicionador">Adicionador:</label>
          <input type="number" id="adicionador" {...register('adicionador')} />
        </div>
        <button onClick={()=> {setStepper(steper-1)}}>Voltar</button>
        <button type="submit">Submit</button>
      </div>
      }
    </Container>
  );
}