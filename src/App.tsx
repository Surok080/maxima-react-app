import Routing from './app/Routing/Routing';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redux from './app/redux';


const store = createStore(redux)

function App() {

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}
export default App;

