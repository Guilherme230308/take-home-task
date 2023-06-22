import Banner from '../components/Banner'
import LoginForm from '../components/LoginForm';
import { Provider } from 'react-redux';
import store from '../store';

function Login() {
    return (
        <div className="App">
            <div className="row">
                <div className="col-md-6 order-2 order-lg-1">
                    <Provider store={store}>
                        <LoginForm />
                    </Provider>
                </div>
                <div className="banner-container col-md-6 order-1 order-lg-2">
                    <Banner />
                </div>
            </div>
        </div>
    );
}

export default Login;
