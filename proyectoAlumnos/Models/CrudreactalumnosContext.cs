using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace proyectoAlumnos.Models;

public partial class CrudreactalumnosContext : DbContext
{
    public CrudreactalumnosContext()
    {
    }

    public CrudreactalumnosContext(DbContextOptions<CrudreactalumnosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; DataBase=CRUDREACTALUMNOS;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.HasKey(e => e.IdAlumno).HasName("PK__Alumno__43FBBAC7D3BD0D66");

            entity.ToTable("Alumno");

            entity.Property(e => e.IdAlumno).HasColumnName("idAlumno");
            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .HasColumnName("apellido");
            entity.Property(e => e.Calificacion)
                .HasMaxLength(50)
                .HasColumnName("calificacion");
            entity.Property(e => e.Materia)
                .HasMaxLength(100)
                .HasColumnName("materia");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
