import { ChevronRightIcon,  Trash2, } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams({
            title: task.title,
            description: task.description
        }).toString();
        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                <button onClick={() => onTaskClick(task.id)} 
                className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                ${task.isCompleted ? 'line-through' : ''}`}>

                    {task.title}
                </button>
                <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
                    <ChevronRightIcon />
                </button>

                <button onClick={() => onDeleteTask(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                    <Trash2 />
                </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;