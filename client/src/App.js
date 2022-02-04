import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState} from 'react'
import Bookings from './Bookings'
import BookingForm from './BookingForm'
import LoginForm from './LoginForm'

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
  if (!currentUser) return <LoginForm setCurrentUser={setCurrentUser}/>

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/bookings" component={Bookings}>
            <Bookings/>
          </Route>
          <Route exact path="/bookings/new" component={BookingForm}>
            <BookingForm/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
