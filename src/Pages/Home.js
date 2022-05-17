import React from 'react'
import { Container } from 'react-bootstrap'
import bgVideo from '../assets/placeholderVideo.mp4'
import './Home.css'

function Home() {
  return (
    <>
        <Container fluid>
            <div id='videoText'>
                <h1 className='text-white'>Your #1 Steam Cleaner in San Antonio!</h1>

            </div>
            <div className='my-3'>
                <video id='homeVideo' loop autoPlay muted className='rounded-5'>
                    <source
                        src={bgVideo}
                        type='video/mp4'
                    />
                </video>
            </div>
        </Container>
        <Container id='homeServices' className='rounded-4 bg-dark p-3'>
            <div>
                <h2>Our Services</h2>
            </div>
        </Container>
    </>
  )
}

export default Home