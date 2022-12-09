import { Testtheme } from '../../shared/themes';
import { ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import {
    Button,
    Checkbox,
    TextField,
    FormControlLabel,
    Grid,
    Box,
    Typography,
    Container,
    Paper,
    CssBaseline,
    Link,
} from '@mui/material';

export const Cadastro = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={Testtheme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 8 }}>
                <Paper elevation={9} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4">
                        Cadastro
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            startIcon={<GoogleIcon fontSize="large"/>}
                        >
                            Cadastre-se com Google
                        </Button>
                        <Typography>ou</Typography>
                        <Box noValidate onSubmit={handleSubmit} sx={{ mt: 2 }} >
                            <Grid container spacing={2}>
                                <Grid item xs={16} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="User"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        password
                                        required
                                        fullWidth
                                        id="Senha"
                                        type="password"
                                        label="Senha"
                                        name="Senha"
                                        autoComplete="new-Senha"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        password
                                        required
                                        fullWidth
                                        name="Confirme a Senha"
                                        label="Confirme a Senha"
                                        type="password"
                                        id="Confirme a Senha"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Confirme o Email"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 3 }}
                                >
                                    Cadastre-se
                                </Button>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Typography>
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
            </Container>
        </ThemeProvider >
    );
}

export default Cadastro