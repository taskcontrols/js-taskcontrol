import { Workflow, task } from taskcontrol;

sparrow = Workflow()
function nesttree(ctx, result, args, kwargs){
    console.log("Running my Middleware Function: nesttree - task items", args, kwargs)
}
    

@task(
    name="taskname",  // task name 
    task_order=1,  // task order when to run when all runs are used 
    task_instance=sparrow,  // instance of Task 
    shared=False,  // boolean whether a shared task 
    args=[1, 2],  // list of args 
    kwargs={},  // dict of kwargs 
    before=[  // before middleware definition
        {
            "function": nesttree,  // middleware function definition
            "args": [11, 12],  // list of args 
            "kwargs": {"d": "Before Testing message Middleware "},  // dict of kwargs 
            "options": {"error": "next", "error_next_value": ""}  // dict options
        }
    ],
    after={  // after middleware definition
            "function": nesttree,  // list of args 
            "args": [11, 12],  // list of args 
            "kwargs": {"d": "Before Testing message Middleware "},  // dict of kwargs
            "options": {"error": "next", "error_next_value": ""}  // dict options
        },
    log=False  // log enabled or not
)
function taskone(ctx, result, args, kwargs) {
    console.log("Running my task function: taskone", args, kwargs)
    return { args, kwargs }
}
    
