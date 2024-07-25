import React from 'react'

const BlogCard = () => {
  return (
    <div>
       <div className='container'>
            <div className='card'>
                <div className='card_image'>
                    <img 
                        width={'350px'}
                        src='./assets/cactus_img.jpg'
                        alt='cactus_photo'
                    />
                </div>
                <div className='card_content'>
                    <a href='##'>Design</a>
                    <h3>Embracing Minimalism</h3>
                    <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                </div>
            </div>
            <div className='footer'>
                <p style={{fontSize:'14px'}}>Annie Spratt</p>
            </div>
       </div>
    </div>
  )
}

export default BlogCard