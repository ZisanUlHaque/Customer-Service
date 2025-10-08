import React from "react";

const SelectedCard = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="w-full lg:w-1/4 mx-2 lg:mx-0">
      <h1 className="text-xl font-bold mb-2">Task Status</h1>

      {inProgress.length === 0 ? (
        <p className="text-gray-500 text-sm mb-4">No active tasks yet.</p>
      ) : (
        inProgress.map((task) => (
          <div
            key={task.id}
            className="bg-amber-50 p-3 rounded-xl mb-3 flex justify-between items-center"
          >
            <span>{task.title}</span>
            <button
              onClick={() => onComplete(task)}
              className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg"
            >
              Complete
            </button>
          </div>
        ))
      )}

      <h1 className="text-xl font-bold mb-2 mt-4">Resolved Tasks</h1>
      {resolved.length === 0 ? (
        <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
      ) : (
        resolved.map((task) => (
          <div key={task.id} className="bg-green-100 p-3 rounded-xl mb-2">
            {task.title}
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedCard;
