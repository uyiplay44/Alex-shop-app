import React from 'react'
import './Map.css'

export const Map = () => {
  return (
    <div className='MapMain'>
      <div className='MapContain'>
        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='7Oh6 Map' className='Map' src="https://maps.google.com/maps?width=720&amp;height=200&amp;hl=en&amp;q=6%20Akpoguma%20Street,By%20Kilo%20Bus-Stop%20Masha/Kilo%20Surulere%20100011,%20Lagos%20,%20Nigeria.+(7Oh6)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
      </div>
    </div>
  )
}
