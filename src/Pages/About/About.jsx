import React from 'react'
import { CardBody, CardHeader, Container } from 'react-bootstrap'
import Title from '../../components/Title/Title'
import { BiBarChartAlt, BiCheckShield, BiCommentCheck   } from "react-icons/bi";
import "./About.scss"

const About = () => {
  return (
    <>
        <div className="about bg-success py-4">
            <Container>
                <Title title="About Us" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati mollitia porro repellendus ipsam sunt culpa. Vitae?" design='design2'/>
                <div className="icon-boxes">

                    <div className="card">
                        <CardHeader>
                            <BiBarChartAlt />
                        </CardHeader>
                        <CardBody>
                            <h4>Increase</h4>
                             <p>
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quos sequi eaque tenetur minima autem! Obcaecati accusamus necessitatibus temporibus! Cupiditate, nisi libero! Culpa iste modi laudantium eum aliquid, dolor error commodi qui totam recusandae soluta optio vero, ea architecto mollitia doloremque adipisci voluptas, nemo exercitationem impedit velit tempore.
                             </p>
                        </CardBody>
                    </div>
                    <div className="card">
                        <CardHeader>
                            <BiCheckShield  />
                        </CardHeader>
                        <CardBody>
                        <h4>Granted</h4>
                             <p>
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quos sequi eaque tenetur minima autem! Obcaecati accusamus necessitatibus temporibus! Cupiditate, nisi libero! Culpa iste modi laudantium eum aliquid, dolor error commodi qui totam recusandae soluta optio vero, ea architecto mollitia doloremque adipisci voluptas, nemo exercitationem impedit velit tempore.
                             </p>
                        </CardBody>
                    </div>
                    <div className="card">
                        <CardHeader>
                            <BiCommentCheck  />
                        </CardHeader>
                        <CardBody>
                        <h4>Support</h4>
                             <p>
                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quos sequi eaque tenetur minima autem! Obcaecati accusamus necessitatibus temporibus! Cupiditate, nisi libero! Culpa iste modi laudantium eum aliquid, dolor error commodi qui totam recusandae soluta optio vero, ea architecto mollitia doloremque adipisci voluptas, nemo exercitationem impedit velit tempore.
                             </p>
                        </CardBody>
                    </div>


                </div>
            </Container>
        </div>
    </>
  )
}

export default About