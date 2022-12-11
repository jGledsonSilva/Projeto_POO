import { AppRoutes } from "./routes";
import { CountDownProvider } from "./shared/contexts/CountDown";

export const App = () => {
  return (
    <CountDownProvider>
      <AppRoutes />
    </CountDownProvider>
  );
}

export default App