import {createStore} from 'redux';
import {connect} from 'react-redux';

//default state
const initialState = {
  incorrectLogin: ''
};

//action creator
function checkLogin(logged) {
	return {type: 'INCORRECT_LOGIN', logged};
  }

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
  incorrectLogin: state.incorrectLogin
});

const mapDispatchToProps = dispatch => {
  return {
		checkLogin: (logged) => dispatch(checkLogin(logged))
	};
};

export const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//store
export const store = createStore(loginApp);

export default store;