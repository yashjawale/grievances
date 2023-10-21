using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using grievances.Models;
using Microsoft.AspNetCore.Mvc;


namespace grievances.Controllers
{
    public class ComplaintController : Controller
    {
        AccessLayer objcomplaint = new AccessLayer();

        [HttpGet]
        [Route("api/Complaints/Index")]
        public IEnumerable<Complaint> Index()
        {
            return objcomplaint.GetAllComplaints();
        }

        [HttpPost]
        [Route("api/Complaints/Create")]
        public int Create(Complaint employee)
        {
            return objcomplaint.AddComplaint(employee);
        }

        [HttpGet]
        [Route("api/Complaints/Details/{id}")]
        public Complaint Details(int id)
        {
            return objcomplaint.GetComplaintData(id);
        }

        [HttpPut]
        [Route("api/Complaints/Edit")]
        public int Edit(Complaint employee)
        {
            return objcomplaint.UpdateComplaint(employee);
        }

        [HttpDelete]
        [Route("api/Complaints/Delete/{id}")]
        public int Delete(int id)
        {
            return objcomplaint.DeleteComplaint(id);
        }
    }
}
