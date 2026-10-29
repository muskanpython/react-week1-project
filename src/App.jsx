
import { useMemo, useState } from 'react';
import { TaskProvider, useTaskContext } from './context/TaskContext';
import TaskForm from './components/tasks/TaskForm';
import TaskList from './components/tasks/TaskList';
import TaskFilters from './components/tasks/TaskFilters';
import './styles/main.css';
import './styles/components.css';

function TaskDashboard() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { tasks } = useTaskContext();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'active' && !task.completed) ||
        (filter === 'completed' && task.completed);

      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, search]);

  return (
    <main className="task-app">
      <header className="task-header">
        <p className="task-eyebrow">WEEK 3 • REACT INTERNSHIP PROJECT</p>
        <h1>My Task Manager</h1>
        <p className="task-subtitle">
          Organize your work, track progress, and get things done.
        </p>
      </header>

      <section className="task-panel">
        <TaskForm />

        <TaskFilters filter={filter} setFilter={setFilter} />

        <div className="task-search">
          <label htmlFor="task-search-input">Search tasks</label>
          <input
            id="task-search-input"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Type to find a task..."
          />
        </div>

        <TaskList tasks={filteredTasks} />
      </section>

      <footer className="task-footer">
        Built with React Hooks, Context API, and localStorage.
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <TaskDashboard />
    </TaskProvider>
  );
}
