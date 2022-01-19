import { useState } from 'react'

const App = () => {

  const [todoState, setTodoState] = useState({
    task: '',
    todo: {},
    todos: []
  })

  const handleInputChange = ({ target: { name, value } }) => setTodoState({ ...todoState, [name]: value })

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(todoState)
    setTodoState({
      ...todoState,
      todo: {
        task: todoState.task,
      },
      task: ' ',

    })
  }

  const handleSaveTodo = () => {
    const todos = JSON.parse(JSON.stringify(todoState.todos))
    todos.push(todoState.todo)
    setTodoState({ ...todoState, todos, todo: {} })
  }


  return (
    <div class="container">
      <div className="row">
        <form>
          <label htmlFor="title">Task</label>
          <input
            type="text"
            name="task"
            value={todoState.task}
            onChange={handleInputChange} />
          <p><button onClick={handleFormSubmit}>Submit</button></p>
        </form>
      </div>
      <hr />
      <div class="row">
        <div className="col-md-6">
          {
            todoState.todo.task ? (
              <div>
                <h1>{todoState.todo.task} <button onClick={handleSaveTodo}>Save Task</button></h1>
              </div>
            ) : null
          }
        </div>
        <div className="col-md-6">
          <h4>Saved Todo List</h4>
          {
            todoState.todos.map(todo => (
              <div>
                <h1>{todo.task}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )


















}

export default App;
