import { useUserStore } from '../../../store/slices/useUserStore'
import AddTaskForm from './add-task-form/AddTaskForm'

const Home = () => {
    const { isUserAdmin, isUserEmployee, isUserTasksEmpty, getUserTasks, isUserUser } = useUserStore()
    // console.log(getUserTasks())
    return (
        <div className='template'>
            <h1 className='home-title'>Bienvenido a apply me</h1>
            {isUserAdmin()
                ? (
                    <h1>User es Admin</h1>
                )
                : isUserEmployee()
                    ? (
                        <h1>User es employee</h1>
                    )
                    : (
                        <div>
                            <div className='tasks-box'>
                                <h3>Tus pedidos</h3>
                                <div className='tasks-list'>
                                    {isUserUser() &&
                            isUserTasksEmpty()

                                        ? (<p>No hay pedidos creados</p>)
                                        : (getUserTasks().map((item, index) => (
                                            <ul key={index}>
                                                <div className='img-box'>
                                                    <li>
                                                        {item.Images && item.Images.length > 0
                                                            ? (item.Images.map((img, imgIndex) => (
                                                                <div key={index}>
                                                                    <img
                                                                        src={img.url}
                                                                        alt={img.name}
                                                                        style={{ width: '100px', height: 'auto' }}
                                                                    />
                                                                </div>
                                                            )))
                                                            : (
                                                                <p>No hay imagen para mostrar</p>
                                                            )}
                                                    </li>
                                                </div>
                                                <div className='text-box'>
                                                    <li>
                                                        <h4>{item.title}</h4>
                                                    </li>
                                                    <li className='task-description'>
                                                        <p>{item.description}</p>
                                                    </li>
                                                </div>
                                            </ul>
                                        )))
                                    }
                                </div>
                            </div>
                            <div className='home-form-box'>
                                {/* <h1>no logueado / no tiene cuenta / es user</h1> */}
                                <h4>Crea tu primer pedido y espera a que un profesional se contacte contigo</h4>
                                <AddTaskForm />
                            </div>
                        </div>)}
        </div>
    )
}

export default Home

// TODO: <img
// src={img.url}
// alt={img.name}
// onError={(e) => {
// e.target.onerror = null; // Previene bucles de error
//  e.target.src = 'path/to/default-image.jpg'; // Imagen por defecto en caso de error
// }}
//  style={{ width: '100px', height: 'auto' }}
/// >