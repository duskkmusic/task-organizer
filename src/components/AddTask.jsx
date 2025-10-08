import Input from "./Input";
import { useState } from "react";

function AddTask({ addTaskOnClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") return;
    addTaskOnClick(title, description);
    setTitle("");
    setDescription("");
    alert("Tarefa adicionada com sucesso!");
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col mt-4 mb-4">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleAddTask}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 transition"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
