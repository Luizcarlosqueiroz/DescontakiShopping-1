import * as yup from 'yup';

export const FormValidations = yup.object().shape({
    titulo: yup
        .string()
        .required('*Título obrigatório'),
    descricao: yup
        .string()
        .required('*Descrição obrigatória'),
    validade: yup
        .string()
        .required('*Validade obrigatória'),
    valor: yup
        .number()
        .typeError('*Valor deve ser um valor numérico')
        .required('*Valor obrigatório'),
    id: yup
        .number()
        .typeError('*Código deve ser valor numérico')
        .required('*Código da Loja obrigatório'),
})

export default FormValidations;
