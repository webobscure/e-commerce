import React from 'react';

import { client, urlFor } from '../../lib/client'

const ProductDetails = ({ product, products }) => {
    const {image, name, details, price} = product
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[0])}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current =='${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(productsQuery)

    const products = await client.fetch(query);
  
    return {
      props: {products, product}
    }
  }

export default ProductDetails