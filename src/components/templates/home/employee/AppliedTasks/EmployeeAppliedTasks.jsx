import { useUserStore } from '../../../../../store/slices/useUserStore'
import { CanceledTasks } from './CanceledTasks'
import { CompletedTasks } from './CompletedTasks'
import { NoAppliedTasks } from './NoAppliedTasks'
import { PendingTasks } from './PendingTasks'

export const EmployeeAppliedTasks = ({ getAllPendingTasks }) => {
    const { isUserTasksAppliedEmpty } = useUserStore()

    return (
        <div>
            <div className='compromises-main-title'>
                <h3>Compromisos</h3>
            </div>
            <div className='employee-applied-tasks'>
                {isUserTasksAppliedEmpty()
                    ? (
                        <NoAppliedTasks/>
                    )
                    : (
                        <div className='compromises-child'>
                            <PendingTasks getAllPendingTasks={getAllPendingTasks}/>
                            <CompletedTasks/>
                            <CanceledTasks/>
                        </div>
                    )}
            </div>
        </div>
    )
}