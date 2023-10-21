using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace grievances.Models;

public partial class GrievancesContext : DbContext
{
    public GrievancesContext()
    {
    }

    public GrievancesContext(DbContextOptions<GrievancesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Complaint> Complaints { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;uid=root;pwd=;database=grievances");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Complaint>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("complaints");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Complaint1)
                .HasMaxLength(255)
                .HasColumnName("complaint");
            entity.Property(e => e.Resolved).HasColumnName("resolved");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
