import React, { useEffect, useState, useMemo } from 'react'
import { useTable } from 'react-table'
import getService from '../../../../services/get_services/getService'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import { useMessageStore } from '../../../../store/slices/useMessageStore'
import { Button } from 'react-bootstrap'
import patchService from '../../../../services/patch_services/patchService'
import { useUserStore } from '../../../../store/slices/useUserStore'
import postService from '../../../../services/post_services/postService'

const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const { addMessage } = useMessageStore()
    const [changingRole, setChangingRole] = useState(false)
    const { user } = useUserStore()

    const handleChangeRole = async(userToChange) => {
        console.log('entro a cabiar el rol')
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
        setUsers(response.data.users)
        setChangingRole(false)
    }

    const getUsers = async() => {
        const url = '/admin/get-users'
        const response = await postService(url, user)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            return
        }
        setUsers(response.data.users)
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

    const data = useMemo(() => users, [users])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    })

    return (
        <div className='template'>
            <div className='admin-users'>
                <h1>Usuarios</h1>
                <div>
                    {users.length > 0
                        ? (
                            <table {...getTableProps()} className='table'>
                                <thead>
                                    {headerGroups.map((headerGroup, index) => (
                                        <tr key={`header-group-${index}-${headerGroup.id}`}>
                                            {headerGroup.headers.map((column, colIndex) => (
                                                <th key={`column-${colIndex}-${column.id}`}>
                                                    {column.render('Header')}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row) => {
                                        prepareRow(row)
                                        // Omite la fila si el rol es 'admin'
                                        if (row.original.role === 'admin') {
                                            return null
                                        }

                                        return (
                                            <tr key={row.original.userId}>
                                                {row.cells.map((cell) => (
                                                    <td
                                                        key={cell.column.id}
                                                        className={row.original.role === 'user' ? 'user-user' : 'user-employee'}
                                                    >
                                                        {cell.render('Cell')}
                                                    </td>
                                                ))}
                                                <td className={row.original.role === 'user' ? 'user-user' : 'user-employee'}>
                                                    <Button
                                                        variant='warning'
                                                        onClick={() => handleChangeRole(row.original)}
                                                        disabled={changingRole}
                                                    >
                                                        {changingRole ? 'Cambiando rol' : 'Cambiar rol'}
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </table>
                        )
                        : (
                            <p>Cargando usuarios...</p>
                        )}
                </div>
            </div>
        </div>
    )
}

export default AdminUsers