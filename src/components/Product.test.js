import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

test('Product component renders without crashing', () => {
  const wrapper = render(<Product
    product={{
      id: 1,
      title: 'The Art Of War',
      price: 10.11,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg'
    }}
  />);

  wrapper.debug();
});
