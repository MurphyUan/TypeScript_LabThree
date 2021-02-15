var tasks = [];
var addTask = function (task) {
    tasks.push(task);
    console.log("___________ New Task Added _________");
    console.log("Task " + task + " inserted in the list");
    return tasks.length;
};
var listAllTasks = function () {
    console.log("All items in Array:");
    tasks.forEach(function (task) { return console.log(task); });
};
var deleteTask = function (task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("__________ Task Removed _________");
        console.log("Task " + task + " removed from list");
    }
    return tasks.length;
};
addTask('wake up');
addTask('sleep');
listAllTasks();
deleteTask('sleep');
