import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comp/header';
import Menu from './comp/menu/menu';
import Messages from './comp/MessagesMenu/messagesMenu';
import Profile from './comp/ProfileMenu/profileMenu';

function App(props) {
  return (
    <div className='wrapper'>
        <Header />
        <div className='main-content'>
          <Menu />
          <Routes>
            <Route path="/" element = {<Profile profileData={props.state.profileData} dispatch={props.dispatch}/>} />
            <Route path="/profile/*" element = {<Profile profileData={props.state.profileData} dispatch={props.dispatch}/>} />
            <Route path="/messages/*" element = {<Messages messageData={props.state.messageData} dispatch = {props.dispatch}/>} />
          </Routes>

        </div>
    </div>
  );
}

export default App;
