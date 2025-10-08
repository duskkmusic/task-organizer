import { useEffect, useState } from 'react' // Importação do hook useState do React
import Tasks from './components/Tasks' // Importação do componente Tasks  
import AddTask from './components/AddTask' // Importação do componente AddTask

function App() {
  const defaultTasks = [
    {
      id: 1,
      title: 'Estudar React',
      description: 'Ler a documentação oficial e fazer exercícios práticos',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Fazer compras',
      description: 'Comprar frutas, legumes e pão',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Exercitar-se',
      description: 'Correr 5km no parque',
      isCompleted: false
    }
  ];

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        method: 'GET',
      });
      const data = await response.json();
      setTasks(data);
    }
   //  fetchTasks(); Se voce quiser, voce pode chamar a API aqui
  }, []);

  

  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(newTask);
  }

  function onDeleteTask(taskId) {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask);
  }

  function addTaskOnClick(title, description) {
    const newTask = {
      id: Math.random(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])

  }

  return (
    <div className='w--screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4 '>
        <h1 className='text-3xl  text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask addTaskOnClick={addTaskOnClick} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  )
}


export default App;