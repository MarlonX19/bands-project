import Routes from './route';
import { AuthProvider } from './context';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App;
