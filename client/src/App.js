import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Bookings from './Bookings'
import BookingForm from './BookingForm'

function App() {

  //MVP
  //navbar
  //home
  //add
  //logout

  //booking container
  //booking card
  //card
  //delete button
  //edit button

  //booking form

  //booking edit form

  //sign in form
  //sign up form


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
