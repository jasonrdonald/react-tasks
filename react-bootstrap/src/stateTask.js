var stateTask = {
  /*action: 'insert',  //insert | edit
  systemtaskid: 0,
  status: '',
  title: '',
  taskconfig: '',
  priority: '',
  recordtype: 'data',
  init: function(){
    return {
            action: 'insert',  //insert | edit
            systemtaskid: 0,
            status: '',
            title: '',
            taskconfig: '',
            priority: '',
            recordtype: 'data'
          };
  },
  setTask: function(task){
      this.systemtaskid = task.systemtaskid;
      this.status = task.status;
      this.title = task.title;
      this.taskconfig = task.taskconfig;
      this.priority = task.priority;
      this.recordtype = task.recordtype;
  },*/
  pushTask: function(task){
      console.log('stateTask.pushTask');
      console.log(task);
      stateTasks.push({systemtaskid: task.systemtaskid, status: task.status, title: task.title, taskconfig: task.taskconfig, priority: task.priority, recordtype: 'data' });
  }
  /*,
  getTaskById: function(taskid) {
    console.log('getTaskById.stateTasks');
    console.log(stateTasks);
    var thisTask = stateTasks.length > 0 ?  stateTasks.find(x => Number(x.systemtaskid) === Number(taskid)) : this.init();
    console.log('gettaskbyid:' + taskid);
    console.log(thisTask);
    return thisTask;
  }*/
};

let initialState = {
  systemtaskid: 0,
  status: '',
  title: '',
  taskconfig: '',
  priority: '',
  recordtype: 'data'
};
let stateTasks = [initialState];

const stateGetTaskById = (taskid) => {

  console.log('stateGetTaskById.taskid');
  console.log(taskid);

  var thisTask = {};
  thisTask = stateTasks.find(x => Number(x.systemtaskid) === Number(taskid)) ?? initialState;

  console.log('stateGetTaskById.thisTask');
  console.log(thisTask);
  return thisTask;
}

var stateCurrTaskId = 0;

const stateSetTask = (taskid, task) => {
  var currTask = stateGetTaskById(taskid);
  stateCurrTaskId = taskid === 0 ? task.systemtaskid : taskid;
  //currTask.systemtaskid = task.systemtaskid;
  currTask.status = task.status;
  currTask.title = task.title;
  currTask.taskconfig = task.taskconfig;
  currTask.priority = task.priority;
  currTask.recordtype = task.recordtype;
  return currTask;
}

export {stateTask, stateTasks, stateGetTaskById, stateSetTask, stateCurrTaskId};
