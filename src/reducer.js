import produce from 'immer';
import themes from './themes';

const initialState = {
  loading: false,
  loadingProgress: { value: 0, message: '' },
  data: {},
  theme: themes.light,
  query: '',
  selected: [],
  sorting: '$',
  reverse: false,
  filter: 'all',
  mode: 'follow',
  lastUpdate: '',
  ignoreList: {},
};

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_QUERY':
        draft.query = action.payload;
        break;
      case 'ADD_SELECTED':
        draft.selected.push(action.payload);
        break;
      case 'REMOVE_SELECTED':
        draft.selected.splice(action.payload.idx, 1);
        delete draft.data[action.payload.address];
        break;
      case 'SET_LOADING':
        draft.loading = action.payload;
        break;
      case 'SET_LOADING_PROGRESS':
        draft.loadingProgress = action.payload;
        break;
      case 'SET_DATA':
        draft.data[action.payload.address] = action.payload.data;
        break;
      case 'SET_THEME':
        draft.theme = themes[action.payload];
        break;
      case 'SET_SORTING':
        draft.sorting = action.payload;
        break;
      case 'TOGGLE_REVERSE':
        draft.reverse = !state.reverse;
        break;
      case 'SET_FILTER':
        draft.filter = action.payload;
        break;
      case 'SET_MODE':
        draft.mode = action.payload;
        break;
      case 'SET_LAST_UPDATE':
        draft.lastUpdate = action.payload;
        break;
      case 'SET_IGNORE_LIST':
        draft.ignoreList = action.payload;
        break;
      default:
        break;
    }
  });
}
