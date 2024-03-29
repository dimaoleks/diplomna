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
import MainPage from "./components/Main/MainPage/MainPage";
import Help from "./components/Navbar/Help/Help";
import CityPageContainer from "./components/Navbar/MyTravel/CityPage/CityPageContainer";
import CreateTravelContainer from "./components/Navbar/MyTravel/CreateTravel/CreateTravelContainer";


class App extends Component {

    // componentDidMount() {
    //     this.props.initializeApp();
    // }

    render() {
        return (
            <>
                <div>
                    <HeaderContainer/>
                </div>
                <div className="app-wrapper">
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() => <ProfileContainer/>}/>
                        <Route path='/my-travel' render={() => <MyTravelContainer/>}/>
                        <Route path='/posts' render={() => <PostsContainer/>}/>
                        <Route path='/settings'/>
                        <Route path='/help' render={() => <Help/>} />
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/register' render={() => <Register/>}/>
                        <Route path='/mainpage' render={() => <MainPage/>}/>
                        <Route path='/citypage' render={() => <CityPageContainer/>}/>
                        <Route path='/create-travel' render={() => <CreateTravelContainer/>}/>
                    </div>
                </div>
            </>
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
