import { GiSandsOfTime } from 'react-icons/gi'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'

export const AssigmentStatusDetail = ({ taskApplied }) => {
    return (
        <div>
            <p className='status'>
                <p>Status:</p>
                {taskApplied.status === 'completed'
                    ? (
                        <div className={`status-${taskApplied.status}`}>
                            <IoIosCheckmarkCircle />
                        </div>
                    )
                    : taskApplied.status === 'canceled'
                        ? (
                            <div className={`status-${taskApplied.status}`}>
                                <TiDelete />
                            </div>
                        )
                        : (
                            <div className={`status-${taskApplied.status}`}>
                                <GiSandsOfTime />
                            </div>
                        )}
            </p>
        </div>
    )
}