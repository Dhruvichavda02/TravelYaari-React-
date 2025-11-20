import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
// import "../CSS/Footer.css"

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div className="bg-success">
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fb-ic ml-0"
              >
                <i className="fab fa-facebook-f white-text mr-1 mr-lg-4"></i>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="tw-ic">
                <i className="fab fa-twitter white-text mr-1 mr-lg-4"></i>
              </a>
              <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-1 mr-lg-4"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-1 mr-lg-4"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ins-ic">
                <i className="fab fa-instagram white-text mr-1 mr-lg-4"></i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="font-weight-bold">TravelYaari</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <p className="text-justify">
              A Solution that activates the travelling bug with vibrant imagery and
              continuously provides enjoyable quality excursions/trips on time and on budget.
              We focus on developing enthusiastically satisfied customers all the time.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Services</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p><Link to="/shop" className="dark-grey-text">Places</Link></p>
            <p><Link to="/gallery" className="dark-grey-text">Gallery</Link></p>
            <p><Link to="/team" className="dark-grey-text">Our Team</Link></p>
            <p><Link to="/about" className="dark-grey-text">About Us</Link></p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p><Link to="/user/dashboard" className="dark-grey-text">Your Account</Link></p>
            <p><Link to="/cart" className="dark-grey-text">Wishlist</Link></p>
            <p><Link to="/contact" className="dark-grey-text">Contact Us</Link></p>
            <p><Link to="#" className="dark-grey-text">Help</Link></p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p><i className="fa fa-home mr-3" /> Gorakhpur, UP 274203, India</p>
            <p><i className="fa fa-envelope mr-3" /> info@travelyaari.com</p>
            <p><i className="fa fa-phone mr-3" /> +01 234 567 88</p>
            <p><i className="fa fa-print mr-3" /> +01 234 567 89</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3 bg-success">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.travelyaari.com" className="white-text ml-1">
            www.travelyaari.com
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
