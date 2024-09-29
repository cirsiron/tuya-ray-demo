import { useSelector, shallowEqual } from 'react-redux';
import { ReduxState } from '@/redux';

export default function useShallowEqualSelector<TSelected>(
  selector: (state: ReduxState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelector<ReduxState, TSelected>(selector, equalityFn || shallowEqual);
}
