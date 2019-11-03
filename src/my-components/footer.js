import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from './logo.png';

const Footer = () => {
    return (
      <MDBFooter color="blue" className="font-small pt-3 mt-3">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="3">
              
             
          <img src={Logo} alt="" width="100" height="100" />
        
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Nobo, en bref</h5>
              <ul>
              Nobo est une startup fondée en Janvier 2017 qui
transforme le domicile de ses clients en hôtel 5 étoiles
grâce à un ensemble de services réservables en ligne.
               
              </ul>
              
               
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer >
          
             site nobo: <a href="https://nobo.life"> NOBO </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
  
  export default Footer;