import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
      <Suspense fallback={<p>...LOADING</p>}>
        <Routes>
          <Route path="/" element={<HomePageUA />} />
          <Route path="/ua/photographer" element={<PhotographerUA />} />
          <Route path="/ua/contacts" element={<ContactsUA />} />
          <Route path="/ua/family" element={<FamilyUA />} />
          <Route path="/ua/romantic" element={<RomanticUA />} />
          <Route path="/ua/newborns" element={<NewbornsUA />} />
          <Route path="/ua/events" element={<EventsUA />} />
          <Route path="/ua/portrait" element={<PortraitUA />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
