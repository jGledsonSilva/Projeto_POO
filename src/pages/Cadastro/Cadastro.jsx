import { createTheme, ThemeProvider } from '@mui/material/styles';
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
} from '@mui/material';

const theme = createTheme({

});

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
        <ThemeProvider theme={theme}>
            <Paper elevation={9} sx={{ my: { xs: 2 }, p: { xs: 2 } }}>
                <Box>
                    <Typography component="h1" variant="h5" mt={8}>
                        Cadastro
                    </Typography>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box noValidate onSubmit={handleSubmit}>
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
                                        label="Este E-mail está correto."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                href='/pagina-inicial'
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 8 }}
                            >
                                Cadastre-se
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider >
    );
}

export default Cadastro