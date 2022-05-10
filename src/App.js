import AppLayout from './components/layout/AppLayout';
import Store from './components/store/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <AppLayout />
      </Provider>
    </div>
  );
};

export default App;
