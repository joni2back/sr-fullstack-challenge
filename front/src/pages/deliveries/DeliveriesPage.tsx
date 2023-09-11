import { FC } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import useHooks from '../../hooks/useHooks';

export const DeliveriesPage: FC = () => {
  const props = useHooks();

  return (
    <>
      <Header {...props} />
      <Main {...props} />
    </>
  );
};
