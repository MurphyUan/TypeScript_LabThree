import {todoInterface} from './todointerface';

class Todo implements todoInterface{

    constructor(){}
    tasks:Array<string>;

    addTask = (task:string):number => {
        this.tasks.push(task);
        console.log("___________ New Task Added _________");
        console.log("Task " +task+ " inserted in the list");
        return this.tasks.length;
    };
    
    listAllTasks = ():void => {
        console.log("All items in Array:");
        this.tasks.forEach(task => console.log(task));
    };
    
    deleteTask = (task:string):number => {
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index,1);
            console.log("__________ Task Removed _________");
            console.log("Task " +task+ " removed from list");
        }
        return this.tasks.length;
    };
}