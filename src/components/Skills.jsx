import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Navegacao.css'; 

function Skills(){
    return (
    <Container id='skills' className="border my-5 fixed-container containerMim">
        <Row className="justify-content-center">  
          <Col xs={12} md={8} className="text-center">  
            <p className='m-5 fontTitulo'>Skills</p>    
          </Col>
          <Row >
             <Col xs ={12} className="mx-4">
             <Image className='' src="html.jpg" fluid />
             <Image className='' src="css.jpg" fluid />
             <Image className='' src="js.jpg" fluid />
             <Image className='' src="typescript.jpg" fluid />
             <Image className='' src="bootstrap.jpg" fluid />
             <Image className='' src="react.jpg" fluid />
             <Image className='' src="php.jpg" fluid />
             <Image className='' src="xampp.jpg" fluid />
             <Image className='' src="java.jpg" fluid />
             <Image className='' src="c.jpg" fluid />
             <Image className='' src="python.jpg" fluid />
             <Image className='' src="postgre.jpg" fluid />
             <Image className='' src="uml.jpg" fluid />
             <Image className='' src="eng.jpg" fluid />
             <Image className='' src="office.jpg" fluid />
             <Image className='' src="Filezilla.jpg" fluid />
             <Image className='' src="vscode.jpg" fluid />
             <Image className='' src="android.jpg" fluid />
             <Image className='' src="git.jpg" fluid />
             </Col>
          </Row>
        </Row>
      </Container>
    );     
}

export default Skills;