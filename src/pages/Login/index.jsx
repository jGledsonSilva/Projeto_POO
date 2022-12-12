import GoogleIcon from '@mui/icons-material/Google';
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  FormHelperText,
} from '@mui/material';
import './styles.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

export const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email não válido').required('Campo Obrigatório'),
    senha: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.,])[A-Za-z\d@$!%*#?&.,]{8,}$/,
      'No mínimo 8 caracteres, ' +
      'uma letra maiúscula e minúscula, ' +
      'um número e um caracter especial'
    ).required('Campo Obrigatório')
  })

  const onSubmit = (values, props) => {
    console.log("submit")
    console.log(values)
    console.log(props)
    settimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (

    <Box id='login'>
      <Box className='sobre'>
        <Box>
          <Typography component="h2">
            HealthPomo
          </Typography>
          <Typography component="p">
            É uma aplicação web que tem como objetivo auxiliar o usuário a gerenciar seu tempo de trabalho e seus exercícios físicos usando a técnica pomodoro, de forma que ele possa ter uma melhor qualidade de vida.
          </Typography>
        </Box>

        <Box>
          <Typography component="h2">
            Pomodoro
          </Typography>
          <Typography component="p">
            O pomodoro é uma técnica de gestão do tempo que consiste em trabalhar em blocos de tempo de 25 minutos, seguidos de descansos curtos.
          </Typography>
        </Box>

        <Box>
          <Typography component="h2">
            Sobre
          </Typography>
          <Typography component="p">
            Projeto Final da disciplina Programação Orientada a Objetos do 3º semestre do curso ciências da computação do IFCE Maracanaú.
          </Typography>
        </Box>
      </Box>
      <Paper elevation={9} id='formularioLogin'>
        <Typography component="h1">
          Login
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box sx={{ mt: 5, mb: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color={'secondary'}
              sx={{ borderRadius: '100px' }}
              startIcon={<GoogleIcon fontSize="large" />}
            >
              Entrar com Google
            </Button>
          </Box>
          <Typography color={'white'}>ou</Typography>

          <Box noValidate sx={{ mt: 2 }} >
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {(props) => (
                <Form>

                  <Field
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    as={TextField}
                  />
                  <ErrorMessage name="email" component={FormHelperText} />

                  <Field
                    required
                    fullWidth
                    id="senha"
                    label="Senha"
                    name="senha"
                    type="senha"
                    as={TextField}
                  />
                  <ErrorMessage name="senha" component={FormHelperText} />
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="contained" type='submit' size="medium" href="pagina-inicial" sx={{
                      alignSelf: 'center'
                    }}>Entrar</Button>
                  </Box>
                  <Box className='cadastro'>
                    <span>Não tem uma conta?</span>
                    <a href="cadastrar">Cadastre-se</a>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Paper>
    </Box >
  )
}

export default Login
