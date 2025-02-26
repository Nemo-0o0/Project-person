import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "../MailChimpForm/MailChimpForm";
import logo from "../../assets/img/logo.svg"
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailChimpForm />
                    <Col sm={6} >
                        <img src={logo} alt="Logo" ></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <button onClick={() => console.log('Navigate to social link 1')}>
                                <img src={navIcon1} alt="Icon 1" />
                            </button>
                            <button onClick={() => console.log('Navigate to social link 2')}>
                                <img src={navIcon2} alt="Icon 2" />
                            </button>
                            <button onClick={() => console.log('Navigate to social link 3')}>
                                <img src={navIcon3} alt="Icon 3" />
                            </button>
                        </div>
                        <p>CoppyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;