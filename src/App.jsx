import { CountDownProvider } from "./shared/contexts/CountDown";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/themes/test";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CountDownProvider>
        <AppRoutes />
      </CountDownProvider>
    </ThemeProvider>
  );
};

export default App;
