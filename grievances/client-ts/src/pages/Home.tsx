import React from 'react'
import Navbar from '../components/Navbar'
import IssueForm from '../components/IssueForm'
import home from '../assets/home.svg'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='flex items-center max-w-4xl mx-auto gap-32'>
                <IssueForm />
                <img src={home} alt="form" className='w-80' />
            </section>
        </>
    )
}

export default Home
