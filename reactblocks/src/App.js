import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
    

function App() {
  return (
    <div className="App">
      <div>

        <Header />
      </div>
      <div className='bottm'>
        <div>
        <Navigation />
        </div>
        <div>
        <Main>
          <div className='childrn'>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
            <Advertisement />
        </Main>
        </div>
      </div>
    </div>
  );
}
                
export default App;