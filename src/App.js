import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from "../src/components/Loader";

import NavbarUA from 'components/Navbar/NavbarUA';
import Footer from 'components/Footer/Footer';


const HomePageUA = lazy(() => import('./pages/HomePage/HomePageUA'));
const FeedbacksUA = lazy(() =>
  import('./pages/Feedbacks/FeedbacksUA')
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

      <Suspense fallback={<Loader backgrColor={"white"} />}>
        <Routes>
          <Route path="/" exact element={<HomePageUA />} />
          <Route path="/ua/photographer" element={<FeedbacksUA />} />
          <Route path="/ua/contacts" element={<ContactsUA />} />
          <Route path="/ua/family" element={<FamilyUA />} />
          <Route path="/ua/romantic" element={<RomanticUA />} />
          <Route path="/ua/newborns" element={<NewbornsUA />} />
          <Route path="/ua/events" element={<EventsUA />} />
          <Route path="/ua/portrait" element={<PortraitUA />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
