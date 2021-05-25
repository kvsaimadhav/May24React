import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : kvsaimadhav@gmail.com </p>
          <p className="lead">Phone : 734 589 7242 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp. I will available morning 10AM to 7PM EST via slack or whatsapp  </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
