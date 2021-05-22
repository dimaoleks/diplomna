import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import MyTravelContainer from "./components/Navbar/MyTravel/MyTravelContainer";
import Login from "./components/Header/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import store from './redux/redux-store';
import {Component} from "react";
import Register from "./components/Header/Register/Register";
import PostsContainer from "./components/Navbar/Posts/PostsContainer";


class App extends Component {

    // componentDidMount() {
    //     this.props.initializeApp();
    // }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/my-travel' render={() => <MyTravelContainer/>}/>
                    <Route path='/posts' render={() => <PostsContainer/>}/>
                    <Route path='/settings'/>
                    <Route path='/help'/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/register' render={() => <Register/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
}

export default MainApp;
