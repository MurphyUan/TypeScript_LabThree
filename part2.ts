let tasks: string[] = [];

let addTask = (task:string):number => {
    tasks.push(task);
    console.log("___________ New Task Added _________");
    console.log("Task " +task+ " inserted in the list");
    return tasks.length;
};

let listAllTasks = ():void => {
    console.log("All items in Array:");
    tasks.forEach(task => console.log(task));
};

let deleteTask = (task:string):number => {
    let index:number = tasks.indexOf(task);
    if(index > -1){
        tasks.splice(index,1);
        console.log("__________ Task Removed _________");
        console.log("Task " +task+ " removed from list");
    }
    return tasks.length;
};

addTask('wake up');
addTask('sleep');

listAllTasks();

deleteTask('sleep');