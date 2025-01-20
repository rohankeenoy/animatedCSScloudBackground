import { useEffect } from 'react';
import '../styles/mainStyles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cloud1 from '../assets/images/c1.png';
import cloud2 from '../assets/images/c2.png';
import cloud3 from '../assets/images/c3.png';
import cloud4 from '../assets/images/c4.png';
import cloud5 from '../assets/images/c5.png';
import cloud6 from '../assets/images/c6.png';

const Main = () => {
    return (
        
        <Container fluid> {/* Change to Container fluid */}
         <div id="particles-js"></div>
            <Row>
                <h1>Animated CSS cloud background</h1>
            </Row>
            {/* Second Row: Logo and Clouds (without images) */}
            <Row>
                <Col>
                    <div className="cloud">
                    <img className="cloud1" src={cloud1} alt="cloud1" />
                    </div>
                </Col>
                <Col>
                    <div className="cloud">
                        <img className="cloud3" src={cloud3} alt="cloud3" />
                    </div>
                </Col>
                <Col>
                    <div className="cloud">
                        <img className="cloud2" src={cloud2} alt="cloud2" />
                    </div>
                </Col>
            </Row>
            


            {/* Third Row: Additional Clouds (without images) */}
            <Row>
                <Col>
                    <div className="cloud">
                        <img className="cloud4" src={cloud4} alt="cloud4" />
                    </div>
                </Col>
                <Col>
                    <div className="cloud">
                        <img className="cloud5" src={cloud5} alt="cloud5" />
                    </div>
                </Col>
            </Row>
           
        </Container>
    );
};

export default Main;
