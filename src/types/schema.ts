import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().min(1, 'Valor deve ser maior').required('Campo obrigatório'),
  age: Yup.number().min(1, 'Valor deve ser maior').required('Campo obrigatório').max(100000000000, 'Não é possivel que seu personagem seja mais velho que isso, brincadeira ein'),
  armor: Yup.number().min(1, 'Valor deve ser maior').required('Campo obrigatório').max(20, 'Valor deve ser menor'),
  desc: Yup.string().min(1, 'Valor deve ser maior').required('Campo obrigatório').max(120, 'Valor deve ser menor'),
  dis: Yup.string().min(1, 'Valor deve ser maior').required('Campo obrigatório').max(20, 'Valor deve ser menor'),
  iniciative: Yup.number().min(1, 'Valor deve ser maior').required('Campo obrigatório').max(20, 'Valor deve ser menor'),
  life: Yup.number().min(1, 'Valor deve ser maior').required('Campo obrigatório').max(2000000000, 'Valor deve ser menor'),
  lifeDice: Yup.string().min(3, 'Valor deve ser maior').required('Campo obrigatório').max(9, 'Valor deve ser menor'),
  counter: Yup.number().min(-20, 'Valor deve ser maior').required('Campo obrigatório').max(20, 'Valor deve ser menor'),
  strengthBase: Yup.number().min(-20, 'Valor deve ser maior').required('Campo obrigatório').max(20, 'Valor deve ser menor'),
});