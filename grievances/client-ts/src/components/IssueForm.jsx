import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils'
import React from 'react'

const IssueForm = () => {
    return (
        <form>
            <h2 className='text-2xl font-light my-4'>New Grievance</h2>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <InputText placeholder='First name' />
                    <InputText placeholder='Last name' />
                </div>
                <InputText placeholder='Title of the issue' />
                <InputTextarea placeholder='Issue Description'/>
                <Button type='submit' label='Submit' className='self-start'/>
            </div>
        </form>
    )
}

export default IssueForm
