export const TaskImageExpanded = ({ imageToExpand }) => {
    console.log('imageToExpand: ', imageToExpand)
    return (
        <div className='img-box'>
            {imageToExpand !== null
                ? (
                    <img
                        src={imageToExpand[0].url}
                        alt={imageToExpand[0].name}
                        style={{ width: '100vw', height: 'auto' }}
                    />

                )
                : (
                    <p className='no-img-box'>No hay imagen para mostrar</p>
                )}
        </div>
    )
}