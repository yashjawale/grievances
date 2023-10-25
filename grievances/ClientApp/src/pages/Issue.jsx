import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back from '../assets/back.svg'
import { Button } from 'primereact/button';
import { AppContext } from '../context/AppContext';
import { InputTextarea } from 'primereact/inputtextarea';
import { OverlayPanel } from 'primereact/overlaypanel';
import axios from 'axios';

const initialIssueDetail = {
  id: 0,
  title: "",
  complainant: "",
  description: "",
  resolved: false,
  resolution: "",
  stamp: ""
};

const Issue = () => {
  const op = useRef(null);
  const router = useNavigate()
  const params = useParams();
  const { id } = params;
  const { showToast, toastTopRight } = useContext(AppContext)
  const [resolutionText, setResolutionText] = useState("")
  const [showResolution, setShowResolution] = useState(false)
  const [issueDetail, setIssueDetail] = useState(initialIssueDetail);

  const fetchData = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/Grievances/${id}`)
    setIssueDetail(data)
  }

  const handleResolve = async (e) => {
    e.preventDefault()
    try {
      let { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/Grievances/resolve`, {
        id,
        resolution: resolutionText
      })
      router(`/admin/issues/`);
      showToast(e, toastTopRight, "success", "Success", "Issue resolved !")
      console.log(data)
    } catch (err) {
      console.log(err)
    }
    console.log("resolved")
  }

  useEffect(() => {
    console.log(id)
    fetchData()
    console.log("issueDetail", issueDetail)
  }, [])

  const { title, complainant, description, resolved, resolution, stamp } = issueDetail

  return (
    <section className='flex flex-col max-w-3xl mx-6 md:mx-auto gap-8 my-12'>
      <Link to={'/admin/issues'} className='self-start'>
        <img src={back} alt="back" className='w-9' />
      </Link>
      {/* <p className='text-slate-600 mb-1 underline'>Issue id: {id}</p> */}
      <h1 className='text-4xl font-light mt-10 text-slate-700'>{title}</h1>
      <p className='text-primary'>{complainant} | {stamp}</p>
      <p className='font-light text-lg'>{description}</p>

      <div>
        {/* <Button label='Add resolution' outlined onClick={() => setShowResolution(!showResolution)} /> */}
        {
          resolved ?
            <>
              <p className='text-lg italic text-primary font-semibold'>Resolved</p>
              <p className='mt-3'><span className='underline underline-offset-2'>Resolution</span> : <span>{resolution}</span></p>
            </> :
            <Button label='Mark Resolved' onClick={(e) => { setShowResolution(!showResolution); op.current.toggle(e) }} />
        }
      </div>
      <OverlayPanel ref={op}>
        <form className='flex flex-col gap-2' onSubmit={handleResolve}>
          <InputTextarea required value={resolutionText} onChange={e => setResolutionText(e.target.value)} />
          <div className='flex gap-2 w-full'>
            <Button label="Close" className='text-sm' type='button' outlined onClick={(e) => op.current.toggle(e)} />
            <Button label="Submit" type='submit' icon="pi pi-check" className='text-sm' />
          </div>
        </form>
      </OverlayPanel>
    </section>
  );
};

export default Issue;
