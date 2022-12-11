import GoogleIcon from '@mui/icons-material/Google';
import {
    Button,
    Checkbox,
    TextField,
    FormControlLabel,
    Grid,
    Box,
    Typography,
    Paper,
    Link,
} from '@mui/material';
import { Styles } from './styles';
import Logo from '../../assets/Logo.svg'

export const Cadastro = () => {
    return (
        <Box sx={Styles.background}>
            <Box sx={{ mt: 0, mb: '72px' }}>
                <Box id="header-logo" sx={Styles.box}>
                    <Box>
                        <img src={Logo} width="78px" />
                    </Box>
                    <Typography variant='h3' margin={1} sx={Styles.logoTitle}>
                        <Typography variant='h3' sx={Styles.titleColor}>Health</Typography>Pomo
                    </Typography>
                </Box>
            </Box>
            <Paper elevation={9} sx={Styles.paper}>
                <Typography component="h1" variant="h4" sx={Styles.h1}>
                    Cadastro
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
                            sx={Styles.button}
                            startIcon={<GoogleIcon fontSize="large" />}
                        >
                            Cadastre-se com Google
                        </Button>
                    </Box>
                    <Typography color={'white'}>ou</Typography>
                    <Box noValidate sx={{ mt: 2 }} >
                        <Grid container spacing={2}>
                            <Grid item xs={16} sm={6} >
                                <TextField
                                    size="small"
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    placeholder="User"
                                    autoFocus

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    password
                                    required
                                    fullWidth
                                    id="Senha"
                                    type="password"
                                    placeholder="Senha"
                                    name="Senha"
                                    autoComplete="new-Senha"


                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size="small"
                                    password
                                    required
                                    fullWidth
                                    name="Confirme a Senha"
                                    placeholder="Confirme a Senha"
                                    type="password"
                                    id="Confirme a Senha"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    sx={Styles.h1}
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Confirme o Email"
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Box sx={{ mt: 2, mb: 3 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={Styles.button}
                                    color={'primary'}
                                >
                                    Cadastre-se
                                </Button>
                            </Box>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Typography color="white" sx={{
                                    'a': {
                                        color: '#4DCBD3',
                                    }
                                }}>
                                    Já tem login?
                                    <Link href="/entrar" variant="body">
                                        Fazer login
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default Cadastro