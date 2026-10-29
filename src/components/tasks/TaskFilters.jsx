
import { useTaskContext } from '../../context/TaskContext';

export default function TaskFilters({ filter, setFilter }) {
  const { tasks, clearCompleted } = useTaskContext();

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingCount = tasks.length - completedCount;

  return (
    <section className="task-filters">
      <div className="task-stats">
        <span>{tasks.length} total</span>
        <span>{remainingCount} remaining</span>
        <span>{completedCount} completed</span>
      </div>

      <div className="filter-actions">
        <div className="filter-buttons" aria-label="Filter tasks">
          {['all', 'active', 'completed'].map((option) => (
            <button
              key={option}
              type="button"
              className={filter === option ? 'filter-active' : ''}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="clear-completed-button"
          onClick={clearCompleted}
          disabled={completedCount === 0}
        >
          Clear completed
        </button>
      </div>
    </section>
  );
}
