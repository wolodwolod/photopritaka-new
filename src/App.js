import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NavbarUA from 'components/Navbar/NavbarUA';

const HomePageUA = lazy(() => import('./pages/HomePage/HomePageUA'));
const PhotographerUA = lazy(() =>
  import('./pages/Photographer/PhotographerUA')
);
const ContactsUA = lazy(() => import('./pages/Contacts/ContactsUA'));
const FamilyUA = lazy(() => import('./pages/Family/FamilyUA'));
const RomanticUA = lazy(() => import('./pages/Romantic/RomanticUA'));
const NewbornsUA = lazy(() => import('./pages/Newborns/NewbornsUA'));
const EventsUA = lazy(() => import('./pages/Events/EventsUA'));
const PortraitUA = lazy(() => import('./pages/Portrait/PortraitUA'));


function App() {
  return (
    <div className="App">
      <NavbarUA />

      <Suspense fallback={<p>...LOADING</p>}>
        <Routes>
          <Route path="/react-photosite/ua" element={<HomePageUA />} />
          <Route path="/react-photosite/ua/photographer" element={<PhotographerUA />} />
          <Route path="/react-photosite/ua/contacts" element={<ContactsUA />} />
          <Route path="/react-photosite/ua/family" element={<FamilyUA />} />
          <Route path="/react-photosite/ua/romantic" element={<RomanticUA />} />
          <Route path="/react-photosite/ua/newborns" element={<NewbornsUA />} />
          <Route path="/react-photosite/ua/events" element={<EventsUA />} />
          <Route path="/react-photosite/ua/portrait" element={<PortraitUA />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
