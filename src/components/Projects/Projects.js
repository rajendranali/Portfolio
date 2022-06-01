import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
//import leaf from '../../Assets/Projects/stylecraze.png'
//import emotion from '../../Assets/Projects/stylecraze.jpeg'
import editor from '../../Assets/Projects/stylecraze.png'
import chatify from '../../Assets/Projects/uboric.png'
//import suicide from '../../Assets/Projects/suicide.png'
import bitsOfCode from '../../Assets/Projects/nykka.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="UBORIC"
              description="An E-Commerce website where users can purchase all varieties of products and users can become a seller.
            
              Features:
              1.Social Sign-in/Sign-up
              2. Location-based product delivery
              3. the User authentication
              4. Authorize Seller.
              5. Payment gateway.
              Tech Stack: React.js | CSS 
              Areas of responsibility:
              1. Developed the Category page footwear. 
              2. Integrated The pages with working functionality. 
              A collaborative project built by a team of 6 executed in 5 days.
              "
              link="https://github.com/Saraswati121/Uboric"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NYKKA"
              description="Nykaa is an E-commerce website about Women's Fashion and Style.
              An E-Commerce website where users can purchase all cosmetics.
              Features:
              1.Social Sign-in/Sign-up
              2. Location-based product delivery
              3. the User authentication
              Tech Stack: HTML | CSS | Javascript 
              Areas of responsibility:
              1.Built authentication and integrated it with the frontend.
              2. Developed the Home and Tariff page. 
              3. Integrated Stripe as a payment gateway. 
              4. Developed a profile page for users.
              5. Developed cart page."
              link="https://github.com/nagesh199/Nykaa-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="STYLECRAZE"
              description="STYLECRAZE CLONE 
              An informative website about women's Style and fashion.
              Features:
              1.Social Sign-in/Sign-up.
              2. Currently verified fashions and information.
              3. User authentication.
              4. Shopping information directly.
              5.Tech Stack: HTML | CSS | Javascript 
              Areas of responsibility:
              1. Built authentication and integrated it with the frontend.
              2. Git-hub Collaboration has been deployed.
              3. Developed the Home Navbar and Hairstyle page. "
              link="https://github.com/rajendranali/Stylecraze"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
