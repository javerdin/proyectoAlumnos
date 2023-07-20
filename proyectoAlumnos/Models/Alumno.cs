using System;
using System.Collections.Generic;

namespace proyectoAlumnos.Models;

public partial class Alumno
{
    public int IdAlumno { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public string? Materia { get; set; }

    public string? Calificacion { get; set; }
}
