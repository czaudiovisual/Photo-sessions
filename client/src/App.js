import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Bookings from './Bookings'
// import EditForm from './EditForm'
import LoginForm from './LoginForm'
import NavigBar from './NavigBar';
import BookingForm from './BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('/me').then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
        })
      }
    })
  }, [])


  function addBooking(booking) {
    setBookings([...bookings, booking])
  }

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
            <Route exact path="/bookings/new" >
              <BookingForm key={bookings.id} currentUser={currentUser} addBooking={addBooking} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
