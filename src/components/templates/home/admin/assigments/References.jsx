import { GiSandsOfTime } from 'react-icons/gi'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'

export const References = () => {
    return (
        <div className='references'>
            <div className='references-box'>
                <div className='references-title'>References</div>
                <div className='references-status'>
                    <p>Completadas:
                        <span className='status-completed'>
                            <IoIosCheckmarkCircle />
                        </span>
                    </p>
                    <p>Canceladas:
                        <span className='status-canceled'>
                            <TiDelete />
                        </span>
                    </p>
                    <p>En progreso:
                        <span className='status-in-progres'>
                            <GiSandsOfTime />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}