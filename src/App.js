import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import Palindrome from './Components/Palindrome';
import Route from './Components/Route';
import FormTask from './Components/FormTask';

const App = () => {
  return (
    <div>
      <Navigation
        menus={[
          {
            name: 'Palindrome',
            href: '/',
          },
          {
            name: 'Form',
            href: '/form',
          },
        ]}
      />

      <Container className="mt-5">
        <Route path="/">
          <Palindrome />
        </Route>

        <Route path="/form">
          <FormTask />
        </Route>
      </Container>
    </div>
  );
};

export default App;
