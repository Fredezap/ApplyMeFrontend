import { useUserStore } from '../../../../../store/slices/useUserStore'
import { EmployeeTasksManager } from './EmployeeTasksManager'

export const CompletedTasks = () => {
    const { getEmployeeTasksAppliedCompleted } = useUserStore()

    return (
        <div>
            <h4>Completados</h4>
            {getEmployeeTasksAppliedCompleted().length === 0
                ? (<p>No tienes tareas completadas</p>)
                : (
                    <EmployeeTasksManager
                        TaskApplieds={getEmployeeTasksAppliedCompleted()}
                        status={'completed'}
                    />
                )}
        </div>
    )
}