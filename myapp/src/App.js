import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

function App() {

  async function showTodos() {
    const models = await DataStore.query(Todo);
    console.log(models);
  }

  async function addTodo() {
    await DataStore.save(
      new Todo({
      "name": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet"
    })
  );

  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addTodo}><h1>Add Todo</h1></button>
        <button onClick={showTodos}><h1>Show Todos</h1></button>
      </header>
    </div>
  );
}

export default App;
