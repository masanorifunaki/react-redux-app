// Reducers から Store を作成するための関数
import { createStore } from 'redux';
import reducers        from './reducers';

// reducersを引数として、戻り値としての store を取得
const store = createStore(reducers);

export default store;