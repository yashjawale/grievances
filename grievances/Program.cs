using grievances.Data;
using grievances.Models;

using GrievancesContext context = new GrievancesContext();

var complaints = from complaint in context.Complaints
                 select complaint;

foreach (Complaint c in complaints)
{
    Console.WriteLine($"Id: {c.Id}");
    Console.WriteLine($"Title: {c.Title}");
    Console.WriteLine($"Resolved: {c.Resolved}");
}

context.SaveChanges();