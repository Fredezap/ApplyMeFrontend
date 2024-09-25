import EmployeeTasksManager from './EmployeeTasksManager'

export const EmployeeAppliedTasks = ({
    unapplyTask,
    finishTask,
    isUserTasksEmpty,
    getUserTasksAppliedCompleted,
    getUserTasksAppliedCanceled,
    getUserTasksAppliedInProgres,
    user
}) => {
    console.log(getUserTasksAppliedInProgres())

    return (
        <div>
            <div className='compromises-main-title'>
                <h3>Compromisos</h3>
            </div>
            <div className='employee-applied-tasks'>
                {isUserTasksEmpty()
                    ? (
                        <div style={{ margin: '10px 0' }}>
                            <p>Aún no has aplicado a ningún pedido</p>
                        </div>
                    )
                    : (
                        <div className='compromises-child'>
                            <div>
                                <h4>Pendientes</h4>
                                {getUserTasksAppliedInProgres().length === 0
                                    ? (<p>No tienes compromisos pendientes</p>)
                                    : (
                                        <EmployeeTasksManager
                                            TaskApplieds={getUserTasksAppliedInProgres()}
                                            status={'in-progres'}
                                            finishTask={finishTask}
                                            unapplyTask={unapplyTask}
                                        />
                                    )}
                            </div>
                            <div>
                                <h4>Completados</h4>
                                {getUserTasksAppliedCompleted().length === 0
                                    ? (<p>No tienes tareas completadas</p>)
                                    : (
                                        <EmployeeTasksManager
                                            TaskApplieds={getUserTasksAppliedCompleted()}
                                            status={'completed'}
                                        />
                                    )}
                            </div>
                            <div className='last-child'>
                                <h4>Cancelados</h4>
                                {getUserTasksAppliedCanceled().length === 0
                                    ? (<p>No tienes tareas canceladas</p>)
                                    : (
                                        <EmployeeTasksManager
                                            TaskApplieds={getUserTasksAppliedCanceled()}
                                            status={'canceled'}
                                        />
                                    )}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}