import { Link } from 'react-router-dom';

import type { ReactElement } from 'react';
import type ILinkButton from './interfaces/ILinkButton';

import styles from './sass/LinkButton.module.scss';

/**
 * Primary UI component for displaying a link in the project.
 */
function LinkButton({
  to,
  title,
  onClick,
  dataTestId,
}: ILinkButton): ReactElement {
  return (
    <Link
      to={to}
      className={styles.linkButton}
      onClick={onClick}
      data-testid={dataTestId}
    >
      { title }
    </Link>
  );
}

export default LinkButton;
