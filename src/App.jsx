import React from "react";
import { AddTask } from "./componets/AddTask";
import Task from "./componets/Task";
 
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };

    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }


  createTask(newTask) {
    const { tasks } = this.state; 
    this.setState({ 
      tasks: [... tasks, newTask],
    });
  }

  updateTask(updatedTask) {
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      const taskToUpdate = task;
      // eslint-disable-next-line no-cond-assign
      if (taskToUpdate.id === updatedTask.id) {
        taskToUpdate.hasFinished = updatedTask.hasFinished;
      }
      return taskToUpdate;
    });
    this.setState({
      tasks: updatedTasks,
    })
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id  != id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    const { tasks } = this.state;
  return (
      <>
         <AddTask  onCreate={this.createTask} />
        { tasks.map((task) => (
        <Task 
          key={task.id} 
          data={task}
          onUpdate={this.updateTask}
          onRemove={this.removeTask}
        />
        )) }
      </>
    );
  }
}

export default App;
