import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader';

import LayoutPage from 'routes/LayoutPage';
import RouteUA from 'routes/RouteUA';
import RoutePL from 'routes/RoutePL';


const HomePageUA = lazy(() => import('pages/HomePage/HomePageUA'));
const FeedbacksUA = lazy(() => import('pages/Feedbacks/FeedbacksUA'));
const ContactsUA = lazy(() => import('pages/Contacts/ContactsUA'));
const FamilyUA = lazy(() => import('pages/Family/FamilyUA'));
const RomanticUA = lazy(() => import('pages/Romantic/RomanticUA'));
const NewbornsUA = lazy(() => import('pages/Newborns/NewbornsUA'));
const EventsUA = lazy(() => import('pages/Events/EventsUA'));
const PortraitUA = lazy(() => import('pages/Portrait/PortraitUA'));

const HomePagePL = lazy(() => import('pages/HomePage/HomePagePL'));
const FeedbacksPL = lazy(() => import('pages/Feedbacks/FeedbacksPL'));
const ContactsPL = lazy(() => import('pages/Contacts/ContactsPL'));
const FamilyPL = lazy(() => import('pages/Family/FamilyPL'));
const RomanticPL = lazy(() => import('pages/Romantic/RomanticPL'));
const NewbornsPL = lazy(() => import('pages/Newborns/NewbornsPL'));
const EventsPL = lazy(() => import('pages/Events/EventsPL'));
const PortraitPL = lazy(() => import('pages/Portrait/PortraitPL'));

function App() {
  return (
    <div className="App">
      {/* <HeaderUA />

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
      <Footer /> */}

      <Suspense fallback={<Loader backgrColor={'white'} />}>
        <Routes>
          <Route path="/" exact element={<LayoutPage />}>
            <Route element={<RouteUA />}>
              <Route index element={<HomePageUA />} />
              {/* <Route path="/ua/home" element={<HomePageUA />} /> */}
              <Route path="/ua/feedbacks" element={<FeedbacksUA />} />
              <Route path="/ua/contacts" element={<ContactsUA />} />
              <Route path="/ua/family" element={<FamilyUA />} />
              <Route path="/ua/romantic" element={<RomanticUA />} />
              <Route path="/ua/newborns" element={<NewbornsUA />} />
              <Route path="/ua/events" element={<EventsUA />} />
              <Route path="/ua/portrait" element={<PortraitUA />} />
            </Route>
            <Route path="/pl" exact element={<RoutePL />}>
              <Route index path="/pl/home" element={<HomePagePL />} />
              <Route path="/pl/feedbacks" element={<FeedbacksPL />} />
              <Route path="/pl/contacts" element={<ContactsPL />} />
              <Route path="/pl/family" element={<FamilyPL />} />
              <Route path="/pl/romantic" element={<RomanticPL />} />
              <Route path="/pl/newborns" element={<NewbornsPL />} />
              <Route path="/pl/events" element={<EventsPL />} />
              <Route path="/pl/portrait" element={<PortraitPL />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
