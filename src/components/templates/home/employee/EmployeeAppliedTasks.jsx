import React from 'react'
import { useUserStore } from '../../../../store/slices/useUserStore'

export const EmployeeAppliedTasks = () => {
    const { user, isUserTasksAppliedEmpty } = useUserStore()

    return (
        <div>
            {isUserTasksAppliedEmpty()
                ? (<p>No tienes compromisos pendientes</p>)
                : (
                    <div className='tasks-box'>
                        {user.TasksApplied.map((index, item) => (
                            <div className='task-detail'>
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
                                <div className='task-author'>
                                    <span style={{ fontWeight: '600' }}>Autor:</span>
                                    <span>{item.User.name}</span>
                                    <span>{item.User.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) }
        </div>
    )
}