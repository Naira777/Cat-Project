import './App.css';
import First from './components/pages/First/index';
import {Switch, Route } from 'react-router-dom'


function App() {
  return (

<Switch> 

      <Route  path="/search/:filter"
      render={() => (
        <First />
      )}/>
      

      <Route  path="/"
      render={() => (
        <First />
      )}
      
    />
 

</Switch>
 
  );
}

export default App;



