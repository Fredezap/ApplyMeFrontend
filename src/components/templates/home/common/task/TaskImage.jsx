export const TaskImage = ({ images }) => {
    return (
        <div className='img-box'>
            {images && images.length > 0
                ? (
                    images.map((img, imgIndex) => (
                        <div key={imgIndex}>
                            <img
                                src={img.url}
                                alt={img.name}
                                style={{ width: '200px', height: 'auto' }}
                            />
                        </div>
                    ))
                )
                : (
                    <p className='no-img-box'>No hay imagen para mostrar</p>
                )}
        </div>
    )
}