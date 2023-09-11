import {
  FC
} from 'react'
import { SubHeader } from './SubHeader/SubHeader';

export const Main: FC = (props) => {

  const { selectedDelivery } = props;

  return (
    <main className="page__main">
      <SubHeader {...props} />
      <div className="products-grid page__horizontal-space page__vertical-space">
        {!selectedDelivery ? <div>Please select an order...</div> : null}

        {(selectedDelivery?.orderItems || []).map((orderItem, i) => 
          <div className="product-card" data-test-id="product-card" key={i}>
            <h2>{orderItem.item.title}</h2>
            <p>{orderItem.item.description}</p>
            <p>${orderItem.item.price}</p>
            <img
              src={orderItem.item.image}
              alt={orderItem.item.title}
            />
          </div>
        )}
      </div>
    </main>
  );
};
