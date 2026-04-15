import { ThemeProvider } from '@/context/ThemeContext';
import { QamarWebLanding } from './components/QamarWebLanding';

function App() {
  return (
    <ThemeProvider>
      <QamarWebLanding />
    </ThemeProvider>
  );
}

export default App;
