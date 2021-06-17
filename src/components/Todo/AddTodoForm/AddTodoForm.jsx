import { useState, useCallback } from 'react';
import './AddTodoForm.scss';

export default function AddTodoForm() {
  const [todo, setUser] = useState({
    name: '',
    period: '',
    deadline: '',
  });
  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
  }, []);

  return (
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <label>
        <span className="addTodoForm__title">Name</span>
        <input
          className="addTodoForm__input"
          required
          type="text"
          name="name"
          value={todo.name}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className="addTodoForm__title">Period</span>
        <input
          className="addTodoForm__input"
          required
          type="text"
          name="period"
          value={todo.period}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className="addTodoForm__title">Deadline</span>
        <input
          className="addTodoForm__input"
          required
          type="datetime-local"
          name="deadline"
          value={todo.deadline}
          onChange={handleChange}
        />
      </label>
      <button className="addTodoForm__button" type="submit">
        Добавить
      </button>
    </form>
  );
}
