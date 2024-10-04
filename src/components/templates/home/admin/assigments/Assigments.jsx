import { AssigmentsMain } from './AssigmentsMain'
import { References } from './References'

export const Assigments = ({ allTasksAppliedByUser }) => {
    return (
        <div>
            <References/>
            <AssigmentsMain allTasksAppliedByUser={allTasksAppliedByUser}/>
        </div>
    )
}