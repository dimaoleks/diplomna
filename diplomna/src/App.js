import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import MyTravelContainer from "./components/Navbar/MyTravel/MyTravelContainer";
import Login from "./components/Header/Login/Login";


function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/my-travel' render={() => <MyTravelContainer/>}/>
                <Route path='/posts'/>
                <Route path='/settings'/>
                <Route path='/help'/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
