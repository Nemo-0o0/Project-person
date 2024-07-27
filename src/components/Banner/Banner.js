import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg'

import './Banner.scss'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web developer", "Web Designer", "UX,UI Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let UpdateText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0 , text.length + 1)
        setText(UpdateText)

        if(isDeleting) {
            setDelta(preDelta => preDelta /2)
        }

        if (!isDeleting && UpdateText === fullText) {
            setIsDeleting(true)
            setDelta(period);
        } else if (isDeleting && UpdateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center text-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Das_`}<span className="wrap">{text}</span></h1>
                        <p>I am a passionate front-end developer with a deep love for creating engaging and user-friendly interfaces. I specialize in HTML, CSS, and JavaScript.</p>
                        <button onClick={() => console.log('Connect')}>Let's Connect
                            <ArrowRightCircle size={25}/>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
