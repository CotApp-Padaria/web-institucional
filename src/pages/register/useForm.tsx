import { useState } from "react"
import * as yup from 'yup'

const useForm = () => {

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: ''
    })    

    const schemaValidation = yup.object().shape({
        name: yup
            .string()
            .required("Nome é obrigatório"),
        lastname: yup
            .string()
            .required("Sobrenome é obrigatório"),
        email: yup
            .string()
            .required("Email é obrigatório")
            .email("Precisa ser um email válido"),
        password: yup
            .string()
            .required("Senha é obrigatória")
            .min(8, 'A senha deve possuir no mínimo 8 caracteres'),
        password_confirmation: yup
            .string()
            .required("A confirmação da senha é obrigatória")
            .oneOf([yup.ref('password'), null], 'A confirmação deve ser identica à senha')
    })    

    return {values, schemaValidation}

}

export default useForm