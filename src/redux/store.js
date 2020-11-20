import {createStore} from 'redux';
import {connect} from 'react-redux';

//action
const CORRECT_LOGIN = 'INCORRECT_LOGIN';

export function checkLogin(logged) {
  return {type: 'INCORRECT_LOGIN', logged};
}

//default state
const initialState = {
  incorrectLogin: ''
};

//reducer
function loginApp(state = initialState, action) {
	switch(action.type) {
		case 'INCORRECT_LOGIN':
			return Object.assign({}, state, {
				incorrectLogin: action.logged
			});
		default:
			return state;
	}
}

const mapStateToProps = state => ({
  correctLogin: state.incorrectLogin
});

const mapDispatchToProps = dispatch => {
  return {
		loginApp: () => dispatch({ type: 'INCORRECT_LOGIN' })
	};
};

export const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//store
const store = createStore(loginApp);

export default store;