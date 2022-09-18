import { Context } from '../context/Context';

import TaskForm from '../components/TaskForm';
import Body from './Body';

function App() {
  return (
    <Context>
      <TaskForm />
      <Body />
    </Context>
  );
}

export default App;
