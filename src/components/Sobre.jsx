import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Navegacao.css'; 

function Sobre() {
    return (
      <Container id='sobre' className="border my-5 fixed-container containerMim">
        <Row>
          <Col xs={11} md={12}>
            <p className='d-flex justify-content-start m-5 fontTitulo'>Sobre Mim</p>
            <p className='d-flex justify-content-start m-5 fontDescricao'>Olá, sou o Victor, um jovem de 19 anos
               apaixonado por música, games, leitura, aprendizado e, principalmente, pela área da tecnologia. 
               <br/> Desde muito cedo, tive contato com o vasto mundo da tecnologia e sempre adorei entender
                como as coisas funcionam.  Em 2021, iniciei minha jornada nesse universo ao ingressar no ensino
                médio integrado ao curso técnico em Desenvolvimento de Sistemas, e foi amor à primeira vista. 
                Desde então, tenho aprimorado meu conhecimento na área. <br/> Atualmente, meu sonho é me tornar 
                um Software Engineer. Para isso, estou expandindo meus conhecimentos em programação full-stack 
                por meio de projetos e estudos pessoais. Além disso, estou me aprofundando na área de Engenharia
                de Software, abordando temas como diagramas UML, levantamento e elicitação de requisitos, metodologias ágeis
                e arquitetura de software. </p>
          </Col>
          <Col className='d-flex justify-content-end'>
          <Image src="aspas.jpg" />
          </Col>
        </Row>
      </Container>
    );
}

export default Sobre; 