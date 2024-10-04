import { Button } from 'react-bootstrap'
import { useTable } from 'react-table'

export const UsersTable = ({ columns, data, changingRole, handleChangeRole }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <table {...getTableProps()} className='table'>
            <thead>
                {headerGroups.map((headerGroup, index) => (
                    <tr key={`header-group-${index}-${headerGroup.id}`}>
                        {headerGroup.headers.map((column, colIndex) => (
                            <th key={`column-${colIndex}-${column.id}`}>
                                {column.render('Header')}
                            </th>
                        ))}
                        <th>
                            Acccion
                        </th>
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
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
}

export default UsersTable