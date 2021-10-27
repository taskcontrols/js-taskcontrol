<p align="center">
  <img width="40%" height="30%" src="https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/images/logo.jpg">
</p>

# taskcontrol (js-taskcontrol)
    

##### Workflow Automation Library with support for Concurrent or Event based processes or activities in Local/Network Automation Tasks, including CI/CD activities.


* `taskcontrol (js-taskcontrol)` is a python library to create tasks in and based on named workflow controls. It allows middlewares before and after each task with support for concurrent processing. taskcontrol can run single or multiple tasks during task invocation/runs.
* It provides a simple decorator called `workflow` that takes arguments to set up the named workflow controls. It also provides methods to create a plugin and allow working with tasks as a module and/or pre-created ordered task list. Taskcontrol allows for scaling of plugin development with various utilities like authentication, logging, concurrency, sockets, events, publisher-subscriber architectures, webhooks, client-server http api servers etc.


# Features

* In-Development: Create Named task controls (tasks) - instance and isolated
* In-Development: Allows middlewares before / after each task (data fetch, auth, data save, logging, logout, cleanup, etc)
* In-Development: Access read-only contexts and results of middlewares/tasks
* In-Development: Allows Merging two instances of task controls with namespace clash handling
* In-Development: Run instance, shared, and mix of tasks (individual or all groups)
* In-Development: Allows working with Logging, Sockets, Events, Queues, Publisher-Subscriber Architectures, etc
* In-Development: Allows working with commands (Todo), ssh (Todo), etc
* In-Development: Allows working with Files (Todo - normal, yaml, ini, and csv), Scheduling (Todo), etc
* In-Development: Allows working with best practices like Dependency Injection (Todo), ORMs/Databases (Todo), Authentication (Todo), etc from within the library and workflows/tasks
* In-Development: Allows creating, registering, and using tasks/workflows as a plugin
* In-Development: Provided in and Allows plugins support for Python, Javascript languages


# Installation


##### Command:

* Node.js

        npm install taskcontrol


##### Version:

    In Development Version: py-taskcontrol V1.2.6 equivalent (functional - production ready with plugin and concurrency support, fully tested) 

[Releases](https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/users/releases.md) Lists in short the releases of the package


##### Package Link:
    
    https://github.com/taskcontrols/js-taskcontrol
    https://www.npmjs.com/package/taskcontrol
    
##### Website:
    
    https://taskcontrols.github.io/


# Technical Specifications


##### Requirements:

* Node 11.x and above
* Any OS supporting Node 11.x and above


##### Package Dependencies:

* None


##### Quick Demo:

[demo example - main.js](https://github.com/taskcontrols/js-taskcontrol/blob/master/main.js)


```js


const workflow = require("./lib/index").workflow
const Tasks = require("./lib/index").Tasks

sparrow = Tasks()

function middleware_trees(ctx, result, k, c, d){
    console.log("Running my Middleware Function: middleware_trees - task items", k, c, d)
}
    

function taskone(ctx, result, a, b):
    console.log("Running my task function: taskone", a, b)

// decorator not allowed
// decorator support for TS, use TS version
workflow(
    // JS-Python version difference
    // taskfunction to run
    taskone,
    // name
    "taskname",
    // task_order
    1,
    // task_instance
    sparrow,
    // shared
    False,
    // args
    [1, 2],
    // JS-Python version difference
    // // kwargs ()
    // {},
    // before
    [
        {
            "function": middleware_trees,
            "args": [11, 12],
            // JS-Python version difference
            // "kwargs": {"d": "Before Testing message Middleware "},
            "options": {"error": "next", "error_next_value": ""}
        }
    ],
    // after
    [
        {
            "function": middleware_trees,
            "args": [13, 14],
            // JS-Python version difference
            // "kwargs": {"d": "After Middleware Testing message"},
            "options": {
                "error": "error_handler",
                "error_next_value": "value",
                "error_handler": lambda err, value: (err, None)
            }
        }
    ],
    // log
    False
)

// Run single task
tasks="taskname"
sparrow.run(tasks)


// Run all tasks
tasks=["1"]
sparrow.run(tasks)

// tasks=["taskname", ..., "anothertask"]
// sparrow.run(tasks)



```


##### Note:

Though it does not support Node version 8.x and above. However, it has not been tested in 8.x. The Syntax and Features of the library supports Node version 11.x due to multithreading environment. All other features may work. However, use at your own risk.


# Wiki

* [Getting started](https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/users/getting-started.md)
    
    Describes in short the usage of the package

* [taskcontrol `workflow` decorator / function](https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/users/workflow.md)
    
    Describes how to use the taskcontrol workflow decorator in detail

* [taskcontrol `workflow` decorator / function argument details](https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/users/workflow-arguments.md)
    
    Describes in detail the arguments of workflow decorator

* [taskcontrol `workflow` before / after argument for middleware declaration](https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/users/workflow-middlewares.md)
    
    Describes creating, defining, and running middlewares

* [taskcontrol `workflow` instance and shared tasks argument](https://github.com/taskcontrols/js-taskcontrol/blob/master/docs/users/workflow-instance-shared-tasks.md)
    
    Describes creating a instance (isolated task) and an shared task (available to all instances)


##### Crazy Hint:
You can also create a simple workflow without taskcontrol using a simple list or nested list and loop through them using a for/while loop and invoke them during looping


```js


// Loop the lists below and invoke the functions 
let lst = ["f1", "f2", "f3"]
let nest_lst = [["f1", "f2"], "f3", "f4", ["f5"]]


// Use a reducer if you want to send args to next function like below
function test(a,b){
    console.log(a,b)
    return {"a":a, "b":b}
}
    
function tester(a,b){
    console.log(a,b)
    return null
}


kwargs_for_first_function_the_its_returns_or_other_value_for_next_func = {"a":"a", "b":"b"}
ls = [kwargs_for_first_function_the_its_returns_or_other_value_for_next_func, test, tester]
 
function red(kwargs_for_first_then_func, p){
    let i = p(kwargs.get("a"), kwargs.get("b"))
    return i
}
    
ls.reduce(red)


```

# [Todo](https://github.com/taskcontrols/js-taskcontrol/blob/master/.todo)


* e2e and Unit Tests - Add Tests (Structure of package created - to be cleaned after writing tests)
* Allow creating and registering a set of task controls as a plugin
* Allow working with commands (Todo), ssh (Todo), Files (Todo - normal, yaml, ini, json, and csv), Scheduling (Todo), Dependency Injection (Todo), ORMs/Databases (Todo), Authentication (Todo)
* [C?] Consider Workflow/Tasks tracking system and Dashboard with its own progress and logging
* [C?] Consider compatibility to Chef/CircleCI/Github/Other Automation tools, atleast as external added plugins


# Status

* In Active Development (taskcontrol version py-taskcontrol V1.2.6 equivalent)
    - Check https://github.com/taskcontrols/py-taskcontrol/ for features

# Support

[Paypal.me/taskcontrols](https://paypal.me/taskcontrols)

[Be a Patreon](https://www.patreon.com/taskcontrols)


# License

The MIT License (MIT) - See [LICENSE](https://github.com/taskcontrols/js-taskcontrol/blob/master/LICENSE) for further details


Copyright © 2020 - till library works

taskcontrols@gmail.com


