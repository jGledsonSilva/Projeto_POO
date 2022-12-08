import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const Darktheme = createTheme({
    palette: {
        primary: {
            main: grey[500],
            dark: grey[700],
            light: grey[400],
            contrastText: '#ffffff'
        },

        background: {
            paper: '#1A1A1B',
            default: '#000000'
        },
    },
})