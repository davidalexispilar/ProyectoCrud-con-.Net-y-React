using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProyectoCrud.Models;

public partial class Contacto
{
    [Key]
    public int IdContacto { get; set; }

    public string Nombre { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public string Telefono { get; set; } = null!;

    public string apellido { get; set; } = null!;
}

