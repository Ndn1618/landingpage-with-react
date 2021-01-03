import { useEffect } from 'react'
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

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
      }
    });
  }, []);

  return (
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
  );
}

export default App;
