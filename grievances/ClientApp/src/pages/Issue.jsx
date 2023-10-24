import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back from '../assets/back.svg'
import { Button } from 'primereact/button';
import { AppContext } from '../context/AppContext';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from 'axios';

const initialIssueDetail = {
  id: 0,
  title: "",
  complainant: "",
  description: "",
  resolved: false,
  resolution: "",
  stamp:""
};

const Issue = () => {
  const router = useNavigate()
  const params = useParams();
  const { id } = params;
  const { showToast,toastTopRight } = useContext(AppContext)
  const [resolutionText, setResolutionText] = useState("")
  const [showResolution, setShowResolution] = useState(false)
  const [issueDetail, setIssueDetail] = useState(initialIssueDetail);

  const fetchData = async()=>{
    let {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/Grievances/${id}`)
    setIssueDetail(data)
  }

  const handleResolve = async (e) => {
    try {
      let { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/Grievances/resolve`,{
        id,
        resolution:resolutionText
      })
      showToast(e,toastTopRight,"success","Success","Issue resolved !")
      console.log(data)
      router(`/admin/issues/`);
    } catch (err) {
      console.log(err)
    }
    console.log("resolved")
  }

  useEffect(() => {
    console.log(id)
    fetchData()
    console.log("issueDetail", issueDetail)
  }, [issueDetail])

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
      {showResolution &&
        <InputTextarea className='self-start' value={resolutionText} onChange={(e) => setResolutionText(e.target.value)} />
      }
      <div className="self-start flex gap-3">
        <Button label='Add resolution' outlined onClick={() => setShowResolution(!showResolution)} />
        <Button label='Mark Resolved' onClick={handleResolve} />
      </div>
    </section>
  );
};

export default Issue;
