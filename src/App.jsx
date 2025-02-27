import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import AboutCompany from './pages/AboutCompany/AboutCompany';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Forget from './pages/Signin/Forget';
import AboutCourse from './pages/AboutCourse/AboutCourse';
import Profile from './pages/Profile/Profile';
import PassingCourse from './pages/PassingCourse/PassingCourse';

const App = () => {



  return (
      <Provider store={store}>
        <div className="App">

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Main />} />
              <Route path='aboutoaa' element={<AboutCompany />} />
              <Route path='signup' element={<Signup />} />
              <Route path='signin' element={<Signin />} />
              <Route path='forget' element={<Forget />} />
              <Route path='aboutcourse' element={<AboutCourse />} />
              <Route path='profile' element={<Profile />} />
              <Route path="passingcourse/:id" element={<PassingCourse />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </Provider>

  );
}

export default App;
