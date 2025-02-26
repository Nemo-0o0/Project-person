import { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import './Banner.scss'
// import { isVisible } from "@testing-library/user-event/dist/utils";

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    const toRotate = useMemo(() => ["Web developer", "Web Designer", "UX,UI Designer"], [])

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text.length, toRotate, period])

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text, delta, tick]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center text-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Das_`}
                                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]' />
                                        <span className="wrap">{text}</span></h1>
                                    <p>I am a passionate front-end developer with a deep love for creating engaging and user-friendly interfaces. I specialize in HTML, CSS, and JavaScript.</p>
                                    <button onClick={() => console.log('Connect')}>
                                        Let's Connect
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
