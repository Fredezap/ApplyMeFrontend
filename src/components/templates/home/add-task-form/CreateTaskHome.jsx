import { useUserStore } from '../../../../store/slices/useUserStore'
import AddTaskForm from './AddTaskForm'

export const CreateTaskHome = () => {
    const { isUserUser } = useUserStore()
    return (
        <div className='home-form-box'>
            {isUserUser()
                ? (
                    <h4>Crear nuevo pedido</h4>
                )
                : (
                    <div>
                        <h1 className='home-title'>Bienvenido a Apply Me</h1>
                        <h4>Crea tu primer pedido y espera a que un profesional se contacte contigo</h4>
                    </div>
                )}
            <AddTaskForm />
        </div>
    )
}