import { useUserStore } from '../../../store/slices/useUserStore'
import AddTaskForm from './add-task-form/AddTaskForm'
import MainAdmin from './admin/MainAdmin'
import { EmployeeAppliedTasks } from './employee/EmployeeAppliedTasks'
import EmployeeMainComponent from './employee/EmployeeMainComponent'
import EmployeePendingTasks from './employee/EmployeePendingTasks'

const Home = () => {
    const { isUserAdmin, isUserEmployee, isUserTasksEmpty, getUserTasks, isUserUser } = useUserStore()
    // todo: Ver todos los usuarios y poder hacerlos employee
    return (
        <div className='template'>
            <h1 className='home-title'>Bienvenido a Apply Me</h1>
            {isUserAdmin()
                ? (
                    <MainAdmin/>
                )
                : isUserEmployee()
                    ? (
                        <div>
                            <EmployeeMainComponent/>
                        </div>
                    )
                    : (
                        <div>
                            {isUserUser() && (
                                <div>
                                    <h3>Tus pedidos</h3>
                                    <div className='tasks-list'>
                                        {isUserTasksEmpty()
                                            ? (
                                                <p>No hay pedidos creados</p>
                                            )
                                            : (
                                                <div className='tasks-box'>
                                                    {getUserTasks().map((item, index) => (
                                                        <ul key={index}>
                                                            <li className='img-box'>
                                                                {item.Images && item.Images.length > 0
                                                                    ? (
                                                                        item.Images.map((img, imgIndex) => (
                                                                            <div key={imgIndex}>
                                                                                <img
                                                                                    src={img.url}
                                                                                    alt={img.name}
                                                                                    style={{ width: '100px', height: 'auto' }}
                                                                                />
                                                                            </div>
                                                                        ))
                                                                    )
                                                                    : (
                                                                        <p>No hay imagen para mostrar</p>
                                                                    )}
                                                            </li>
                                                            <li className='text-box'>
                                                                <h4>{item.title}</h4>
                                                                <p className='task-description'>{item.description}</p>
                                                            </li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            )}
                            <div className='home-form-box'>
                                {isUserUser()
                                    ? (<h4>Crear nuevo pedido</h4>)
                                    : (<h4> Crea tu primer pedido y espera a que un profesional se contacte contigo</h4>)
                                }
                                <AddTaskForm />
                            </div>
                        </div>
                    )}
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