import Header from './components/Header';
import { ListProvider } from './context/ListProvider';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <ListProvider>
        <Header />
        <Home />
      </ListProvider>
    </>
  );
}
