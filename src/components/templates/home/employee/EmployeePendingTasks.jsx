const EmployeePendingTasks = ({
    gettingAllPendingTasks,
    pendingTasks,
    ApplyForATask
}) => {
    return (
        <div className="pending-tasks">
            <div className='task-main-title'>
                <h3>Pedidos disponibles</h3>
            </div>
            {gettingAllPendingTasks
                ? <p>Cargando tareas pendientes...</p>
                : (
                    <div className='tasks-list'>
                        {pendingTasks.length === 0
                            ? <p>No hay pedidos pendientes</p>
                            : (
                                <div className='tasks-box'>
                                    {pendingTasks.map((item, index) => (
                                        <div key={index} className='task-detail'>
                                            <ul>
                                                <li className='img-box'>
                                                    {item.Images && item.Images.length > 0
                                                        ? item.Images.map((img, imgIndex) => (
                                                            <div key={imgIndex}>
                                                                <img
                                                                    src={img.url}
                                                                    alt={img.name}
                                                                    style={{ width: '100px', height: 'auto' }}
                                                                />
                                                                <div className='task-author'>
                                                                    <span style={{ fontWeight: '600' }}>Autor: </span>
                                                                    <span>{item.User.name} </span>
                                                                    <span>{item.User.surname}</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                        : <p>No hay imagen para mostrar</p>}
                                                </li>
                                                <li className='text-box'>
                                                    <h4>{item.title}</h4>
                                                    <p className='task-description'>{item.description}</p>
                                                </li>
                                                <button onClick={() => ApplyForATask(item.taskId)}>Aplicar</button>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                )}
        </div>
    )
}

export default EmployeePendingTasks