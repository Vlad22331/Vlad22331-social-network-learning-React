import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comp/header';
import Menu from './comp/menu/menu';
import Messages from './comp/MessagesMenu/messagesMenu';
import UserContainer from './comp/UserMenu/UserMenuComponent/userContainer';
import ProfileMenuContainer from './comp/ProfileMenu/profileMenuContainer';

function App(props) {
  return (
    <div className='wrapper'>
        <Header />
        <div className='main-content'>
          <Menu />
          <Routes>
            <Route path="/" element = {<ProfileMenuContainer/>} />
            <Route path="/profile/*" element = {<ProfileMenuContainer/>} />  
            <Route path="/messages/*" element = {<Messages store = {props.store}/>} />
            <Route path="/Users/*" element = {<UserContainer/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
