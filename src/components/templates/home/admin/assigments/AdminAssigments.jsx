import { useEffect, useState } from 'react'
import { Assigments } from './Assigments'
import { useGetAlltasksApplied } from './useGetAlltasksApplied'

export const AdminAssigments = () => {
    const [allTasksAppliedByUser, setAllTasksAppliedByUser] = useState([])
    const [gettingAllTasksApplied, setGettingAllTasksApplied] = useState(false)
    const getAllTasksApplied = useGetAlltasksApplied()

    useEffect(() => {
        getAllTasksApplied({ setAllTasksAppliedByUser, setGettingAllTasksApplied })
    }, [])

    return (
        <div className='admin-tasks-assigments'>
            {gettingAllTasksApplied
                ? (
                    <div>
                        <p>Cargando tareas asignadas</p>
                    </div>
                )
                : (
                    <Assigments allTasksAppliedByUser={allTasksAppliedByUser}/>
                )}
        </div>
    )
}