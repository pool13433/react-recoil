//import logo from './logo.svg';
import React from 'react';
import './App.css';

import CharacterCounter from './components/CharacterCounter'
//import CurrentUserInfo from './components/CurrentUserInfo';
import TodoList from './components/TodoList';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <CharacterCounter />
      <TodoList />
      <React.Suspense fallback={<div>Loading...</div>}>
        {/*<CurrentUserInfo />
        < UserInfo userID={1} />
        <UserInfo userID={2} />
        <UserInfo userID={3} />*/}
      </React.Suspense>
    </div>
  );
}

export default App;
