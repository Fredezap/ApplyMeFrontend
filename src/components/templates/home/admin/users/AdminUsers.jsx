import React, { useEffect, useState, useMemo } from 'react'
import { useTable } from 'react-table'
import getService from '../../../../../services/get_services/getService'
import { backendErrorMessageProcessor } from '../../../../molecules/messageManager/backendErrorMessageProcessor'
import { useMessageStore } from '../../../../../store/slices/useMessageStore'
import { Button } from 'react-bootstrap'
import patchService from '../../../../../services/patch_services/patchService'
import { useUserStore } from '../../../../../store/slices/useUserStore'
import postService from '../../../../../services/post_services/postService'
import UsersTable from './UsersTable'

const AdminUsers = () => {
    const [employeesUsers, setEmployeesUsers] = useState([])
    const [commonUsers, setCommonUsers] = useState([])
    const [gettingUsers, setGettingUsers] = useState(false)
    const { addMessage } = useMessageStore()
    const [changingRole, setChangingRole] = useState(false)
    const { user } = useUserStore()

    const handleChangeRole = async(userToChange) => {
        setChangingRole(true)
        const values = { userToChange, user }
        const response = await patchService('/admin/change-user-role', values)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            setChangingRole(false)
            return
        }
        addMessage({ type: 'success', content: 'Se ha cambiado el rol del usuario correctamente' })
        getUsers()
        setChangingRole(false)
    }

    const getUsers = async() => {
        setGettingUsers(true)
        const url = '/admin/get-users'
        const response = await postService(url, user)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            setGettingUsers(false)
            return
        }
        setCommonUsers(response.data.commonUsers)
        setEmployeesUsers(response.data.employeesUsers)
        setGettingUsers(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const columns = useMemo(
        () => [
            { Header: 'Nombre', accessor: 'name' },
            { Header: 'Apellido', accessor: 'surname' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Role', accessor: 'role' },
            { Header: 'Teléfono', accessor: 'phone' }
        ],
        []
    )

    const commonUsersdata = useMemo(() => commonUsers, [commonUsers])
    const employeesUsersdata = useMemo(() => employeesUsers, [employeesUsers])

    return (
        <div className='template'>
            <div className='admin-users'>
                {gettingUsers
                    ? (
                        <h5>Cargando usuarios</h5>
                    )
                    : (
                        <div className='admin-tables-container'>
                            <div className='shadow-container'>
                                <h4>Clientes</h4>
                                {commonUsersdata.length === 0
                                    ? (
                                        <p>No hay registros de clientes para mostrar</p>
                                    )
                                    : (
                                        <UsersTable
                                            columns={columns}
                                            data={commonUsersdata}
                                            handleChangeRole={handleChangeRole}
                                            changingRole={changingRole}
                                        />
                                    )}
                            </div>
                            <div className='shadow-container'>
                                <h4>Empleados</h4>
                                {employeesUsersdata.length === 0
                                    ? (
                                        <p>No hay registros de clientes para mostrar</p>
                                    )
                                    : (
                                        <UsersTable
                                            columns={columns}
                                            data={employeesUsersdata}
                                            handleChangeRole={handleChangeRole}
                                            changingRole={changingRole}
                                        />
                                    )}
                            </div>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default AdminUsers