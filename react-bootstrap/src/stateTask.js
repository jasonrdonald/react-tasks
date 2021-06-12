var stateTask = {
  action: 'insert',  //insert | edit
  systemtaskid: 1,
  status: '',
  title: '',
  taskconfig: '',
  priority: '',
  setTask: function(task){
      this.systemtaskid = task.systemtaskid;
      this.status = task.status;
      this.title = task.title;
      this.taskconfig = task.taskconfig;
      this.priority = task.priority;
  },
  pushTask: function(task){
    stateTasks.push({systemtaskid: task.systemtaskid, status: task.status, title: task.title, taskconfig: task.taskconfig, priority: task.priority });
  },
  getTaskById: function(taskid) {
    return stateTasks[0];
  }
};

var stateTasks = [];

export {stateTask, stateTasks};
