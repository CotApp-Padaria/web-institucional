import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Container from '../../components/Container';
import useForm from './useForm';

import styles from './index.module.css';
import { Button, TextField } from '@material-ui/core';

import api from '../../services/api';

function Register() {
        
    const router = useRouter();
    const { enviroment } = router.query;    

    const {values, schemaValidation} = useForm();    
            
    const formik = useFormik({
        
        initialValues: values,
        validationSchema: schemaValidation,

        onSubmit: async (values: any) => {
            api.post('auth/register', values)
            .then(response => {

            })
            .catch(e => {
                console.log('Deu erro')
                formik.setErrors(e.response.data.error_description)                
            })            
        }

    });    

    return (

        <Container>             

            <section className={`container sub-header ps-3 pe-3`}>

                <div className={`row align-items-center justify-content-center ${styles.rowContainer}`}>

                    <div className="col-lg-6 col-md-8">
                        
                        <h1>Registre-se agora!</h1> 
                        <h3>Preencha as informações abaixo.</h3>

                        <form onSubmit={formik.handleSubmit} className="mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Primeiro nome" 
                                        variant="outlined"                                        
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />                            
                                </div>
                                <div className="col-md-6">
                                    <TextField 
                                        fullWidth
                                        id="lastname"
                                        name="lastname"
                                        label="Sobrenome" 
                                        variant="outlined"                                        
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        helperText={formik.touched.lastname && formik.errors.lastname}
                                    />                            
                                </div>
                                <div className="col-md-12">
                                    <TextField 
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="E-mail" 
                                        variant="outlined"                                        
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />                            
                                </div>
                                <div className="col-md-6">
                                    <TextField 
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label="Senha"
                                        type="password"
                                        placeholder="No mínimo 8 caracteres"
                                        variant="outlined"                      
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />                            
                                </div>
                                <div className="col-md-6">
                                    <TextField 
                                        fullWidth
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        label="Confirme a sua senha"
                                        type="password"
                                        placeholder="Repita a mesma senha"
                                        variant="outlined"                      
                                        value={formik.values.password_confirmation}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
                                        helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
                                    />                            
                                </div>                                
                            </div>

                            <div className="col-md-12 text-end">
                                <Button type="submit" variant="contained" size="large" color="primary">
                                    Registrar
                                </Button>
                            </div>

                        </form>
                                                

                    </div>

                </div>

            </section>

        </Container>        

    )

}
    
export default Register;