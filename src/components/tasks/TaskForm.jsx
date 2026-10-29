
import { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    addTask(title);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title">New task</label>

      <div className="task-form-row">
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What do you need to do?"
          maxLength={120}
        />

        <button type="submit" disabled={!title.trim()}>
          Add Task
        </button>
      </div>
    </form>
  );
}
