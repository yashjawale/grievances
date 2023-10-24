import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Accordion, AccordionTab } from 'primereact/accordion';
import AccordionBody from '../components/AccordionBody';
import axios from 'axios'

const Admin = () => {
    const [issues, setIssues] = useState([])
    const fetchData = async () => {
        try {
            let { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/Grievances`)
            console.log(data)
            setIssues(data)
        } catch (err) {
            console.log(err.message)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Navbar />
            <section className='flex flex-col max-w-3xl mx-6 md:mx-auto gap-8'>
                {/*  ------------ Pending Grievances ------------  */}
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab
                            header={
                                <div className="flex align-items-center">
                                    <span className="vertical-align-middle text-primary">Pending</span>
                                </div>
                            }>
                            {
                                issues.filter(i => i.resolved === false).map((issue) => {
                                    return <AccordionBody id={issue.id}
                                    key={issue.id}
                                        title={issue.title}
                                        description={issue.description}
                                        complainant={issue.complainant}
                                        resolution={issue.resolution}
                                        resolved={issue.resolved}
                                        stamp={issue.stamp} />
                                })
                            }


                        </AccordionTab>
                    </Accordion>
                </div>
                {/*  ------------ Resolved Grievances ------------  */}
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab
                            header={
                                <div className="flex align-items-center">
                                    <span className="vertical-align-middle text-primary">Resolved</span>
                                </div>
                            }
                        >
                            {
                                issues.filter(i => i.resolved === true).map((issue) => {
                                    return <AccordionBody id={issue.id}
                                    key={issue.id}
                                        title={issue.title}
                                        description={issue.description}
                                        complainant={issue.complainant}
                                        resolution={issue.resolution}
                                        resolved={issue.resolved}
                                        stamp={issue.stamp} />
                                })
                            }


                        </AccordionTab>
                    </Accordion>
                </div>


            </section>
        </>
    )
}

export default Admin
