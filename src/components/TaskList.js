import React, { useState } from 'react';
import TaskAdd from './TaskAdd';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    // handle task addition from the child component
    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

     // handle task deletion
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

    return (
        <div className='container'>
            <TaskAdd addTask={handleAddTask} />
            <h6>Task List:</h6>

            {tasks.length === 0 ? (
                <h5 class="message">No tasks found</h5>
            ) : (
            tasks.map((task, index) => (
                <p key={index}><span>{index + 1}.  {task}</span> <button onClick={() => handleDeleteTask(index)}>Delete</button></p>
            ))
            
            )}

            
        </div>
    );
}

export default TaskList;
