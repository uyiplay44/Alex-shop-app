import './Footer.css'
import Logo from '../../assets/logo.jpeg';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  
  return (
    <div className='FooterMain'>
      <div className='FooterContainer'>
        <div className='FooterImg'>
          <img src={Logo} alt="" />
          <div className='FooterIcon'>
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className='FooterTitle'>
          <h3>Contact</h3>
          <p>6 akpoguma Street,by kilo bus-stop Masha/kilo
            Surulere 100011, Lagos , Nigeria</p>
        </div>
        <div className='FooterBtn'>
          <a href="/">Make Your Booking</a>
        </div>
        <div className='FooterBook'>
          <h2>Buisness Hours</h2>
          <p>Mon: Closed</p>
          <p>Tue: 9:00 AM - 9:00 PM</p>
          <p>Wed: 9:00 AM - 9:00 PM</p>
          <p>Thus: 9:00 AM - 9:00 PM</p>
          <p>Fri: 9:00 AM - 9:00 PM</p>
          <p>Sat: 9:00 AM - 9:00 PM</p>
          <p>Sun: 1:00 PM - 9:00 PM</p>
        </div>
      </div>
    </div>
  )
}
