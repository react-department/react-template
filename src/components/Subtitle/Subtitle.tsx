import { testIdSubtitle } from '../../constants/TestId';

import type { ReactElement } from 'react';
import type ISubtitle from './interfaces/ISubtitle';

import styles from './sass/Subtitle.module.scss';

/**
 * H2 subtitle component
 */
export default function Subtitle({ text }: ISubtitle): ReactElement {
  return (
    <h2 className={styles.appSubtitle} data-testid={testIdSubtitle}>
      {text}
    </h2>
  );
}
