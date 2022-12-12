import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/themes/test";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
