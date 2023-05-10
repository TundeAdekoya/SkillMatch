import React from 'react'
import '../css/Product.css'

const Product = () => {
  return (
    <div id='product' className='flex flex-col gap-3 items-center justify-between'>

      <div className="product-container flex gap-3">
        <section className="green flex items-center justify-center">
          <div className="product-text">
            <h1>50<span>+</span></h1>
            <h3>Designer Profiles processed</h3>
          </div>
        </section>
        <section className="cyan flex items-center justify-center">
          <div className="product-text">
              <h1>50<span>+</span></h1>
              <h3>Developer Profiles processed</h3>
            </div>
        </section>
      </div>

      <div className="product-container flex gap-3">
        <section className="blue flex items-center justify-center">
          <div className="product-text">
              <h1>60<span>+</span></h1>
              <h3>Happy users</h3>
          </div>
        </section>
        <section className="purple flex items-center justify-center">
          <div className="product-text">
              <h1>3<span>secs</span></h1>
              <h3>API processing</h3>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product