import { FC, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { deliveriesQuery } from '../../../graphql/queries';
import { statuses, successMessages } from '../../../types/types'

import './Header.scss';

export const Header: FC = (props: any) => {

  const {
    setRequesting, requesting, 
    setDeliveries, deliveries, 
    setSelectedDelivery, selectedDelivery
  } = props;

  const handleClick = item => setSelectedDelivery(item);
  const handleConfirmClick = () => alert(successMessages[selectedDelivery.status])

  const { loading, data } = useQuery(deliveriesQuery);

  useEffect(() => {
    setDeliveries(data)
    setRequesting(loading)

    if (data?.deliveries?.length) {
      setSelectedDelivery(data.deliveries[0])
    }
  }, [data])

  return (
    <header className="header-container">
      <div className="page__horizontal-space header">
        <div className="tabs-container">
          <div className="tabs">
            {requesting ? <div>Loading...</div> : null}

            {(deliveries?.deliveries || []).map((item, i) => 
              <button className={selectedDelivery?.id == item.id ? 'tab active' : 'tab'} key={i} onClick={() => handleClick(item)}>
                <span className="date">{item.scheduledDate}</span>
              </button>
            )}
          </div>
        </div>
        <button
          className="btn-primary btn-buy"
          data-test-id="header-cta"
          onClick={handleConfirmClick}>
          {statuses[selectedDelivery?.status]}
        </button>
      </div>
    </header>
  );
};
