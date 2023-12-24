import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from './redux';
import './styles/index.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
