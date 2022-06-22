import { Provider } from 'react-redux'
import store from './store/index'
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
