import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// TODO:
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    // action that we will see as soon as user clicks on the search button
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
