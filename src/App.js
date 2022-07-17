import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Error404 from './Error404'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'

function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        {/* <Route path="/" component={Error404} /> */}
      </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
    
  );
}

export default App;
