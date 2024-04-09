import { useTranslation } from 'react-i18next';

import type { ReactElement } from 'react';

/**
 * About page view
 */
function AboutView(): ReactElement {
  const { t } = useTranslation();
  return (
    <div>
      <p>{ t('about.pageTitle') }</p>
    </div>
  );
}

export default AboutView;
