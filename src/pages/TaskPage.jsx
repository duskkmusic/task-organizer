import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate("/");
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex items-center justify-center p-6">
      <div className="w-[500px] space-y-6">
        {/* Cabeçalho com botão voltar */}
        <div className="flex justify-center items-center relative text-slate-100">
          <button
            onClick={onBackClick}
            className="absolute left-0 p-2 hover:bg-slate-400 rounded-md"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <h1 className="text-3xl font-bold text-center">Detalhes da Tarefa</h1>
        </div>

        {/* Conteúdo da tarefa */}
        <div className="bg-slate-200 p-6 rounded-md shadow">
          <h2 className="text-xl font-bold text-slate-600 mb-2">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
