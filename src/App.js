import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comp/header';
import Menu from './comp/menu/menu';
import Messages from './comp/MessagesMenu/messagesMenu';
import Profile from './comp/ProfileMenu/profileMenu';
import UserContainer from './comp/UserMenu/UserMenuComponent/userContainer';

function App(props) {
  return (
    <div className='wrapper'>
        <Header />
        <div className='main-content'>
          <Menu />
          <Routes>
            <Route path="/" element = {<Profile store = {props.store}/>} />
            <Route path="/profile/*" element = {<Profile store = {props.store}/>} />  
            <Route path="/messages/*" element = {<Messages store = {props.store}/>} />
            <Route path="/user/*" element = {<UserContainer/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
