"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        var _this = this;
        this.addTask = function (task) {
            _this.tasks.push(task);
            console.log("___________ New Task Added _________");
            console.log("Task " + task + " inserted in the list");
            return _this.tasks.length;
        };
        this.listAllTasks = function () {
            console.log("All items in Array:");
            _this.tasks.forEach(function (task) { return console.log(task); });
        };
        this.deleteTask = function (task) {
            var index = _this.tasks.indexOf(task);
            if (index > -1) {
                _this.tasks.splice(index, 1);
                console.log("__________ Task Removed _________");
                console.log("Task " + task + " removed from list");
            }
            return _this.tasks.length;
        };
    }
    return Todo;
}());
