import './PhotoBox.css';
import photo3 from '../../assets/photo3.jpeg';
import photo13 from '../../assets/photo13.jpeg';
import photo7 from '../../assets/photo7.jpg';
import photo38 from '../../assets/photo38.jpg'
import photo6 from '../../assets/photo6.jpg';

export const PhotoBox = () => {
  return (
    <div className="PhotoShopMain">
      <div className='PhotoShopContainer'>
        <div className='Photoshop'>
          <h2>CUSTOMER GALLARY</h2>
        </div>
        <div className='PhotoShopGallary'>
          <div className='Photo_Tag_1'>
            <img src={photo3} alt="tag" />
          </div>
          <div className='Photo_Tag_1'>
            <img src={photo13} alt="tag" />
          </div>
          <div className='Photo_Tag_1'>
            <img src={photo7} alt="tag" />
          </div>
          <div className='Photo_Tag_1'>
            <img src={photo38} alt="tag" />
          </div>
          <div className='Photo_Tag_1'>
            <img src={photo6} alt="tag" />
          </div>
        </div>
      </div>
    </div>
  )
}
