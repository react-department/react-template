import type Statuses from '../../../../constants/Statuses';

export default interface JokesState {
  status: Statuses;
  joke: string | undefined
}
