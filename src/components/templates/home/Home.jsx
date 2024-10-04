import { useUserStore } from '../../../store/slices/useUserStore'
import { CreateTaskHome } from './add-task-form/CreateTaskHome'
import { AdminMainComponent } from './admin/AdminMainComponent'
import EmployeeMainComponent from './employee/EmployeeMainComponent'
import UserMainComponent from './user/UserMainComponent'

// todo: CHEQUEAR PORQUE NO ME MUESTRA LOS COMPROMISOS
const Home = () => {
    const { isUserAdmin, isUserEmployee, isUserUser } = useUserStore()

    return (
        <div className='template'>
            {isUserAdmin()
                ? (
                    <AdminMainComponent/>
                )
                : isUserEmployee()
                    ? (
                        <EmployeeMainComponent/>
                    )
                    : (
                        <>
                            {isUserUser() && (
                                <UserMainComponent/>
                            )}
                            <CreateTaskHome/>
                        </>
                    )}
        </div>
    )
}

export default Home