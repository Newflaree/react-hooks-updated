import { Navigate, Route, Routes } from 'react-router-dom';
// Context
import { UserProvider } from './context';
// Pages
import { HomePage, AboutPage, LoginPage, Navbar } from './';

export const MainApp = () => {

  return (
    <UserProvider>
      <Navbar />
      <hr />
      
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='about' element={ <AboutPage /> } />
        <Route path='login' element={ <LoginPage /> } />

        <Route path='/*' element={ <Navigate to='/about' /> } />
      </Routes>
    </UserProvider>
  );
}
