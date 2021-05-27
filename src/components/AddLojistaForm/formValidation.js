import * as yup from 'yup'

export const LojistaFormValidation = yup.object().shape({
    cnpj: yup
        .string()
        .required('*CNPJ obrigatório'),
    categoria: yup
        .string()
        .required('*Categoria é obrigatório'),
    nome: yup
        .string()
        .required('*Nome é obrigatório'),
    ponto: yup
        .string()
        .required('*Ponto é obrigatório'),
})

export default LojistaFormValidation