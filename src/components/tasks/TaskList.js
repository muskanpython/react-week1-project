
import { useTaskContext } from '../../context/TaskContext';

export default function TaskList({ tasks: visibleTasks }) {
  const { toggleTask, deleteTask } = useTaskContext();
const tasks = visibleTasks;

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet</h3>
        <p>Add your first task using the form above.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          className={`task-item ${task.completed ? 'completed' : ''}`}
          key={task.id}
        >
          <label className="task-label">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span>{task.title}</span>
          </label>

          <button
            type="button"
            className="delete-task-button"
            onClick={() => deleteTask(task.id)}
            aria-label={`Delete ${task.title}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
