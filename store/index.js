import { createStore } from 'easy-peasy';
import user from 'store/user';
import app from 'store/app';

const store = createStore({
    user,
    app
});

export default store;