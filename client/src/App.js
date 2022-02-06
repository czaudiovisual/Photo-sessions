import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Bookings from './Bookings'
// import BookingForm from './BookingForm'
import LoginForm from './LoginForm'
// import SignupForm from './SignupForm'
import NavigBar from './NavigBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ addBooking }) {
  const [currentUser, setCurrentUser] = useState(null)


  //MVP
  //card
  //delete button
  //edit button

  //booking edit form



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
              <Bookings currentUser={currentUser}/>
            </Route>
            {/* <Route exact path="/bookings/new" component={BookingForm}>
              <BookingForm currentUser={currentUser} addBooking={addBooking} />
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
