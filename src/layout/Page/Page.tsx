import { Outlet } from 'react-router-dom';

import Title from '../../components/Title/Title';
import usePageTitle from '../../hooks/usePageTitle';
import Header from '../Header/Header';

import type { ReactElement } from 'react';

/**
 * Main page layout
 */
function Page(): ReactElement {
  const pageTitle = usePageTitle();
  return (
    <div className="page">
      <Header />
      <Title text={pageTitle} />
      <Outlet />
    </div>
  );
}

export default Page;
