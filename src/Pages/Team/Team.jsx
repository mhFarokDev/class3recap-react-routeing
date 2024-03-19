import React from 'react'
import { Button, CardBody, CardFooter, CardHeader, Container } from 'react-bootstrap'
import "./Team.scss"
import Title from '../../components/Title/Title'
import Teamdata from "../../faker/Teamdata.js"

const Team = () => {
  return (
    <>
    <div className='bg-info py-4'>
        <Container>
            <Title 
            title="Our Team Members" 
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati mollitia porro repellendus ipsam sunt culpa. Vitae?"/>

            <div className="members">

                {
                    Teamdata.map((item, index)=> 
                        <div className="card mb-3" key={index}>
                            <CardHeader className='w-100'>
                                <img className='w-100' src={item.url} alt="" />
                            </CardHeader>
                            <CardBody>
                                <h5><b>Name : </b> {item.name}</h5>
                                <p><b>Age : </b>{item.age}</p>
                                <p><b>Skill : </b> {item.Position}</p>
                            </CardBody>
                            <CardFooter>
                                <Button className="w-100 bg-black">Vio</Button>
                            </CardFooter>
                        </div>
                        )
                }
                
            </div>
        </Container>
    </div>
    </>
  )
}

export default Team