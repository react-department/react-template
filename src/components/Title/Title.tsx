import { testIdMainTitle } from '../../constants/TestId';

import type { ReactElement } from 'react';
import type ITitle from './interfaces/ITitle';

import styles from './sass/Title.module.scss';

/**
 * H1 title component
 */
export default function Title({ text }: ITitle): ReactElement {
  return (
    <h1 className={styles.appTitle} data-testid={testIdMainTitle}>
      {text}
    </h1>
  );
}
