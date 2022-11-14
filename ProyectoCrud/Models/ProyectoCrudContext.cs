using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ProyectoCrud.Models;

public partial class ProyectoCrudContext : DbContext
{
    public ProyectoCrudContext()
    {
    }

    public ProyectoCrudContext(DbContextOptions<ProyectoCrudContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contacto> Contactos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=(localdb)\\server; DataBase=ProyectoCrud;Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contacto>(entity =>
        {
            entity
                .HasKey(x =>x.IdContacto);
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.IdContacto)
                .ValueGeneratedOnAdd()
                .HasColumnName("idContacto");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Telefono)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("telefono");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
