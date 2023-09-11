import { FC } from 'react';
import cart from '../../../../assets/cart.svg';
import { statuses, titles, successMessages } from '../../../../types/types'
import './SubHeader.scss';

export const SubHeader: FC = (props: any) => {
  const { selectedDelivery } = props;

  if (! selectedDelivery) {
    return;
  }

  const handleClick = () => alert(successMessages[selectedDelivery.status])

  return (
    <div className="subheader-container">
      <div className="subheader page__horizontal-space">
        <h1 data-test-id="subheader-title">{titles[selectedDelivery.status]}</h1>
        <button
          className="btn-primary cta"
          data-test-id="subheader-cta"
          onClick={handleClick}>
          <div className="cart-counter">
            <img src={cart} />
            <span data-test-id="cart-counter">{selectedDelivery.orderItems.length}</span>
          </div>
          <span className="copy">{statuses[selectedDelivery.status]}</span>
        </button>
      </div>
    </div>
  );
};
