export default {
  GET_TODO(state, todo) {
    const newState = state;
    newState.newTodo = todo;

    return newState;
  },
  ADD_TODO(state) {
    const newState = state;
    newState.todos.push({
      body: state.newTodo,
      completed: false,
    });

    return newState;
  },
  EDIT_TODO(state, todo) {
    const newState = state;
    const { todos } = newState;
    todos.splice(todos.indexOf(todo), 1);
    newState.todos = todos;
    newState.newTodo = todo.body;

    return newState;
  },
  REMOVE_TODO(state, todo) {
    const newTodo = todo;
    newTodo.completed = !todo.completed;

    return newTodo;
  },
  CLEAR_TODO(state) {
    const newState = state;
    newState.newTodo = '';

    return newState;
  },
};
