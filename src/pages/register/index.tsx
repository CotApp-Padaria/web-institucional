import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Container from '../../components/Container';
import useForm from './useForm';

import styles from './index.module.css';
import { Button, TextField } from '@material-ui/core';

function Register() {
        
    const router = useRouter();
    const { enviroment } = router.query;    

    const {values, schemaValidation} = useForm();    
            
    const formik = useFormik({
        
        initialValues: values,
        validationSchema: schemaValidation,

        onSubmit: (values: any) => {
            alert(JSON.stringify(values, null, 2));
        },

    });    

    return (

        <Container>             

            <section className={`container sub-header`}>

                <div className={`row align-items-center justify-content-center ${styles.rowContainer}`}>

                    <div className="col-md-6">
                        
                        <h1>Registre-se agora!</h1> 
                        <h3>Preencha as informações abaixo.</h3>

                        <form onSubmit={formik.handleSubmit} className="mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField 
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