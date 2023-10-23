import { Button } from 'primereact/button'
import React from 'react'

interface Props {
    title: string,
    description: string,
    dated: string,
    sender: string
}

const AccordionBody: React.FC<Props> = ({ title, description, dated, sender }) => {
    return (
        <section className="p-6 font-light border flex justify-between items-end rounded-md my-4 border-gray-600">
            <div>
                <p className='text-lg '>{title}</p>
                <p className='mt-1'>
                    <span className='text-sm'>{sender}</span> |
                    <span className='text-sm'>{dated}</span>
                </p>
            </div>

            <div className='flex gap-2'>
                <Button size='small' label={"More Info"} outlined/>
                <Button size='small' label={"Mark Resolved"}/>
            </div>
        </section>
    )
}

export default AccordionBody
