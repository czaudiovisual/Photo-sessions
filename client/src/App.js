import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Bookings from './Bookings'
import BookingForm from './BookingForm'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import NavigBar from './NavigBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)


  //MVP
  //navbar
  //add
  //logout


  //card
  //delete button
  //edit button

  //booking edit form

  //sign in form
  //sign up form
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(res => {
      setCurrentUser(null)
    })
  }

  if (!currentUser) return <LoginForm setCurrentUser={setCurrentUser} /> 

  return (
    <div className="App">
      <nav>
        <NavigBar />
        <span>Logged in as {currentUser.username} <button onClick={handleLogoutClick}>Logout</button></span>
      </nav>
      <div>
        <Router>
          <Switch>
            <Route exact path="/bookings" component={Bookings}>
              <Bookings />
            </Route>
            <Route exact path="/bookings/new" component={BookingForm}>
              <BookingForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
