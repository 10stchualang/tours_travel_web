import { action, thunk } from 'easy-peasy';

const initialState = {};

export default {
    userProfile: {},
    setUser: action((state, payload) => {
        state.userProfile = payload;
    }),
    clearState: action(state => {
        state = initialState;
    }),
    login: thunk(async (actions, payload) => {
        actions.setUser({ name: 'User', age: null, address: null });
    }),
    logout: thunk(async (actions, payload) => { })
};