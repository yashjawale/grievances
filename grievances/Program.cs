using grievances.Models;

using GrievancesContext context = new GrievancesContext();

Complaint veggieSpecial = new Complaint()
{
    Complaint1 = "This is a test",
    Id = 5,
    Resolved = false
};

//context.Complaints.Add(veggieSpecial);

Complaint deluxSpecial = new Complaint()
{
    Complaint1 = "This is another test",
    Id = 8,
    Resolved = true
};

//context.Complaints.Add(deluxSpecial);

var complaints = from complaint in context.Complaints
                 select complaint;

foreach (Complaint c in complaints)
{
    Console.WriteLine($"Id: {c.Id}");
    Console.WriteLine($"Title: {c.Complaint1}");
    Console.WriteLine($"Id: {c.Resolved}");
}

context.SaveChanges();