using System;
using System.Collections.Generic;

namespace grievances.Models;

public partial class Complaint
{
    public int Id { get; set; }

    public string? Complaint1 { get; set; }

    public bool? Resolved { get; set; }
}
