using System;
using Microsoft.EntityFrameworkCore;

namespace grievances.Models
{
    public class AccessLayer
    {

        GrievancesContext db = new GrievancesContext();

        public IEnumerable<Complaint> GetAllComplaints()
        {
            try
            {
                return db.Complaints.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record     
        public int AddComplaint(Complaint comp)
        {
            try
            {
                db.Complaints.Add(comp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee    
        public int UpdateComplaint(Complaint comp)
        {
            try
            {
                db.Entry(comp).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee    
        public Complaint GetComplaintData(int id)
        {
            try
            {
                Complaint comp = db.Complaints.Find(id);
                return comp;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee    
        public int DeleteComplaint(int id)
        {
            try
            {
                Complaint comp = db.Complaints.Find(id);
                db.Complaints.Remove(comp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}


