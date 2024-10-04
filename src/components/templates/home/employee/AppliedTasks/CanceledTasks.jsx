import React from 'react'
import { useUserStore } from '../../../../../store/slices/useUserStore'
import { EmployeeTasksManager } from './EmployeeTasksManager'

export const CanceledTasks = () => {
    const { getEmployeeTasksAppliedCanceled } = useUserStore()
    return (
        <div className='last-child'>
            <h4>Cancelados</h4>
            {getEmployeeTasksAppliedCanceled().length === 0
                ? (<p>No tienes tareas canceladas</p>)
                : (
                    <EmployeeTasksManager
                        TaskApplieds={getEmployeeTasksAppliedCanceled()}
                        status={'canceled'}
                    />
                )}
        </div>
    )
}