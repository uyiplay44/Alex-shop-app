import './ContentHome.css';
import Video from '../../assets/Video.mp4';

export const ContentHome = () => {
  return (
    <div className='Home-main'>
      <div className='Home-container'>
        <div className='Home-title'>
          <div className='word'>
            <h2>Top-notch Barber Shop</h2>
          </div>
          <p>7h6 Barber Shop offers the greatest service for individuals or groups of people. We provide a variety of services, including haircuts, beard trims, shaves, and styling. We are experienced in creating a variety of appearances that are suited to the customers tastes and face shape. The greatest equipment is utilised to bring out your attractiveness and handsomeness. <br /> <br /> We are completely committed to providing you with the finest service possible. Please schedule an appointment with us so that we can provide you with the finest service possible.</p>
        </div>
        <div>
          <video src={Video} autoPlay loop muted ></video>
        </div>
      </div>
    </div>
  )
}
