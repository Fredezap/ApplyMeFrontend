import React from 'react'
import { formatDate } from '../../../../../utilities/formatDate'

export const EmployeeTasksManager = ({
    TaskApplieds,
    status,
    finishTask,
    unapplyTask
}) => {
    return (
        <div>
            <div className='tasks-list'>
                <div className='tasks-box'>
                    {TaskApplieds.map((taskApplied, taskAppliedIndex) => (
                        <div className='task-detail-employee' key={taskAppliedIndex}>
                            <ul>
                                <li className='img-box'>
                                    {taskApplied.Task.Images && taskApplied.Task.Images.length > 0
                                        ? (
                                            taskApplied.Task.Images.map((img, imgIndex) => (
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
                                            <p className='no-img-box'>No hay imagen para mostrar</p>
                                        )}
                                    <div className='task-author-detail'>
                                        <div>
                                            <span style={{ fontWeight: '600' }}>Autor: </span>
                                            {taskApplied.Task.User.name} {taskApplied.Task.User.surname}                                        </div>
                                        <div>
                                            <span style={{ fontWeight: '600' }}>Email: </span>
                                            {taskApplied.Task.User.email}
                                        </div>
                                        <div>
                                            <span style={{ fontWeight: '600' }}>Telefono: </span>
                                            {taskApplied.Task.User.phone}
                                        </div>
                                    </div>
                                </li>
                                <li className='text-box'>
                                    <h4>{taskApplied.Task.title}</h4>
                                    <p className='task-description'>{taskApplied.Task.description}</p>
                                </li>
                                <li style={{ textAlign: 'center' }}>
                                    <p>Fecha: {formatDate(taskApplied.createdAt)}</p>
                                </li>
                            </ul>
                            {status === 'in-progres' && (
                                <div className='employee-pending-task-buttons'>
                                    <button onClick={() => finishTask(taskApplied.taskAppliedId)}>Finalizar</button>
                                    <button onClick={() => unapplyTask(taskApplied.taskAppliedId)}>Cancelar</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}