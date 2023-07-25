import './Testmonial.css'
import star2 from '../../assets/Star2.png'

export const Testimonial = () => {
  return (
    <div className='TestimonialMain'>
      <div className='TestimonalBody'>
        <div className='TestimonialTitle'>
          <h1>TESTIMONIALS</h1>
        </div>
        <div className='TestimonialContainer'>
          <div className='Text'>
            <p className='Title'><img src={star2} alt="" className='StarTag' />Last week</p>
            <p>This is one of the best barberShop i have ever been to. Very good service and very hopsitable personnel in there. Quality service with percision.</p>
            <h3 className='TestName'>Michael</h3>
            <h3 className='TestName'>Michael</h3>
          </div>
          <div className='Text'>
            <p className='Title'><img src={star2} alt="" className='StarTag' />a month ago</p>
            <p> This place was highly recommended. Colored my hair green, to say it was amazing is in understatment. I love, love, love. Lexy is really good at his craft... customer service on point, good music while in the salon. No regret at all. Definitely visiting again. Forget my haircut your current barber has done for you in the past, visit 7oh6 Salon today and get to know what i am saying. Barber pass barber.</p>
            <h3 className='TestName'>Bisiola</h3>
          </div>
          <div className='Text'>
            <p className='Title'><img src={star2} alt="" className='StarTag' />2 month ago</p>
            <p>Good customer service and enabling environment. Its fun playing Xbox and PS5 with the latest game console avaliable for customers to entertain themselves and good music at the same time. My haircut is super clean</p>
            <h3 className='TestName'>Nicholas</h3>
          </div>
          <div className='Text'>
            <p className='Title'><img src={star2} alt="" className='StarTag' />9 month ago</p>
            <p>Good customer service and enabling environment. Its fun playing Xbox and PS5 with the latest game console avaliable for customers to entertain themselves and good music at the same time. My haircut is super clean</p>
            <h3 className='TestName'>Matilda</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
