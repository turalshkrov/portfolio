import { Container } from "react-bootstrap";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const d = new Date()
  let year = d.getFullYear();
  return (
    <footer>
      <Container>
        <div className="row py-3 justify-content-between align-items-center">
          <div className="col-12 col-md-8">
            <h5 className="fw-bold mb-3">TURAL SHUKUROV</h5>
            <p className="footer-text">A Frontend focused Web Developer building the Frontend of Websites and Web Applications</p>
          </div>
          <div className="socials row col-12 col-md-2 justify-content-end">
            <div className="col-12">
              <h5 className="fw-bold align-left">SOCIALS</h5>
            </div>
            <div className="col-3">
              <a href="https://twitter.com/TuralSukurov4" target="_blank">
                <FaTwitter size={20}/>
              </a>
            </div>
            <div className="col-3">
              <a href="https://github.com/turalshkrov" target="_blank">
                <FaGithub size={20}/>
              </a>
            </div>
            <div className="col-3">
              <a href="https://www.linkedin.com/in/tural-shkrov/" target="_blank">
                <FaLinkedinIn size={20}/>
              </a>
            </div>
            <div className="col-3">
              <a href="https://www.instagram.com/tural.shkrov/" target="_blank">
                <FaInstagram size={20}/>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center footer-lower">
          <p className="mt-3 mb-0">© Copyright {year}. Made by <a href="https://github.com/turalshkrov" target="_blank" className="fw-bold">Tural Shukurov</a></p>
        </div>
      </Container>
    </footer>
  )
}
