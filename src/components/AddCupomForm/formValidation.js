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
        .string()
        .required('*Valor obrigatório'),
    idLoja: yup
        .string()
        .required('*Código da Loja obrigatório'),
    nomeLoja: yup
        .string()
        .required('Nome da Loja obrigatório'),
})

export default FormValidations;
