import { useState, useEffect } from 'react'

import Loader from './Components/Loader/Loader'
import './App.css';
import Header from './Sections/Header/Header'
import TopContent from './Sections/TopContent/TopContent';
import Service from './Sections/Service/Service'
import WorkOuter from './Sections/WorkOuter/WorkOuter'
import Portfolio from './Sections/Portfolio/Portfolio'
import Clients from './Sections/Clients/Clients'
import Team from './Sections/Team/Team'
import Contact from './Sections/Contact/Contact'

function App() {

  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
            <>
              <Header />
              <TopContent />
              <Service />
              <WorkOuter />
              <Portfolio />
              <Clients />
              <Team />
              <Contact />
            </>
          )
      }
    </>
  );
}

export default App;
