import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

function App() {
  async function deleteItem() {
    const modelToDelete = await DataStore.query(Todo, 'fd22d3a0-f9cb-4919-90a2-ef8b0bd3880c');
    DataStore.delete(modelToDelete);
  }

  async function update() {
    const original = await DataStore.query(Todo, 'fd22d3a0-f9cb-4919-90a2-ef8b0bd3880c');
    await DataStore.save(Todo.copyOf(original, item => {
        // Update the values on {item} variable to update DataStore entry
        item.name = `title ${Date.now()}`;
    }));

  }


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
        <button onClick={update}><h1>Update</h1></button>
        <button onClick={deleteItem}><h1>Delete</h1></button>
      </header>
    </div>
  );
}

export default App;
