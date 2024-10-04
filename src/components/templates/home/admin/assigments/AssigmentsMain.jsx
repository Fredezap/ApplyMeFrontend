import { AllTasksAppliedByUserDetail } from './AllTasksAppliedByUserDetail'

export const AssigmentsMain = ({ allTasksAppliedByUser }) => {
    return (
        <div className='main'>
            <h4>Tareas asignadas</h4>
            {allTasksAppliedByUser.length === 0
                ? (
                    <p>No hay tareas asignadas para mostrar</p>
                )
                : (
                    <AllTasksAppliedByUserDetail allTasksAppliedByUser={allTasksAppliedByUser}/>
                )}
        </div>
    )
}