import Logo from '../../../atoms/others/Logo'
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import useSectionNoReadyYetStore from '../../../../store/slices/useSectionNoReadyYetStore'
import { PATHS } from '../../../../store/models/routes.js'

export const Footer = () => {
    const { show, setShow } = useSectionNoReadyYetStore()

    return (
        <div className="footer">
            <div className='first-child'>
                <ul>
                    <li>
                        <Logo to={PATHS.HOME}/>
                    </li>
                    <li className='icons'>
                        <FaWhatsapp onClick={setShow(!show)}/>
                        <FaInstagram onClick={setShow(!show)}/>
                        <FaFacebook onClick={setShow(!show)}/>
                        <FaYoutube onClick={setShow(!show)}/>
                    </li>
                </ul>
            </div>
            <div className='second-child'>
                <ul>
                    <li onClick={setShow(!show)}>
                        <p><b>Contacto</b></p>
                        <p>applyme@gmail.com</p>
                    </li>
                    <li onClick={setShow(!show)}>
                        <p><b>Sobre nosotros</b></p>
                    </li>
                    <li onClick={setShow(!show)}>
                        <p><b>Legal</b></p>
                        <p>Politicas de privacidad</p>
                        <p>Terminos del servicio</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}