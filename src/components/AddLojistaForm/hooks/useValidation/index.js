import React,{useState,useEffect} from 'react'
import {ValidationError} from 'yup'

const useValidation = (values,schema)=>{
    const [erros,setErros] = useState({})

    const validate = async ()=>{
        try {
            await schema.validate(values,{abortEarly:false})
            setErros({})
        } catch (e) {
            if (e instanceof ValidationError) {
                const erros = {}
                e.inner.forEach(key => {
                    erros[key.path] = key.message
                })
                setErros(erros)
            }
        }
    }
    useEffect(()=>{validate()},[values])
    return{erros}
}

export default useValidation