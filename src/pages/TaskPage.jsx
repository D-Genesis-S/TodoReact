import {useEffect, useState} from "react";
import tasksAPI from "../api/tasksAPI.js";

const TaskPage = () =>{
    const taskId = '123'

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        tasksAPI.getById(taskId).then((taskDada) => {
            setTask(taskDada)
            setHasError(false)
        })
            .catch(() => {
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    },[])

    if(isLoading){
        return <div>Loading...</div>
    }

    if(hasError){
        return <div>Task not found!</div>
    }

    return (
        <div>
            <h1>{task.title}</h1>
            {task.isDone ? 'Задача выполнена' : 'Задача не выполнена'}
        </div>
    )
}

export default TaskPage