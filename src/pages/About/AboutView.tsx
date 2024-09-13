import { useTranslation } from 'react-i18next';

import type { ReactElement } from 'react';

import styles from './sass/AboutView.module.scss';

/**
 * About page view
 */
function AboutView(): ReactElement {
  const { t } = useTranslation();
  return (
    <div className={styles.about}>
      <p>{ t('about.pageTitle') }</p>
    </div>
  );
}

export default AboutView;
