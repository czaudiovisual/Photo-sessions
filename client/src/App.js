import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Bookings from './Bookings'
import EditBookingForm from './EditBookingForm'
import LoginForm from './LoginForm'
// import SignupForm from './SignupForm'
import NavigBar from './NavigBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingForm from './BookingForm';


function App(handleEditButtonClick, editBooking, booking) {
  const [currentUser, setCurrentUser] = useState(null)

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
            <Route exact path="/" component={Bookings}>
              <Bookings currentUser={currentUser} />
            </Route>
            <Route exact path="/bookings/new" component={BookingForm} >
              <BookingForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/bookings/:id/edit" component={BookingForm}>
              <EditBookingForm handleEditButtonClick={handleEditButtonClick} editBooking={editBooking} booking={booking} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
