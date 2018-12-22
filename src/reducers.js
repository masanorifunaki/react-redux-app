// 複数のReducerを組み合わせて1つのReducerにまとめるための関数
import { combineReducers } from 'redux';

// 個別のReducerを宣言する
// state={list: []} Storeの要素としての todos の構造を定義

export function todos(state = { list: [] }, action) {
  switch ( action.type ) {
    case 'ADD_TO_DO':
      return Object.assign({}, state, { list: state.list.concat(action.todo) });
    case 'REMOVE_TO_DO':
      return Object.assign({}, state, {
        list: state.list.filter(
          todo => {
            return action.todo !== todo;
          }
        )
      });
    default:
      return state;
  }
}

// combineReducersで複数のReducerを組み合わせて1つのReducersにまとめている
export default combineReducers({
  todos
});
