using System;
using System.Collections.Generic;
using System.Linq;

// ==========================================
// TESTES DO CICLO 1 (Exercício Anterior)
// ==========================================
Console.WriteLine("--- TESTES DO CICLO 1 ---");
Console.WriteLine($"Hora 6: {PeriodoDoDia(6)}");   
Console.WriteLine($"Hora 9: {PeriodoDoDia(9)}");   
Console.WriteLine($"Hora 14: {PeriodoDoDia(14)}"); 
Console.WriteLine($"Hora 20: {PeriodoDoDia(20)}"); 

// ==========================================
// TESTES DO CICLO 2 (Exercício Atual)
// ==========================================
Console.WriteLine("\n--- TESTES DO CICLO 2 (LINQ) ---");
// Teste 3 do slide: Filtrar cardiologistas (Id 1)
Console.WriteLine("Médicos da especialidade 1 (Ordem Alfabética):");
foreach (var medico in MedicosDaEspecialidade(1))
{
    Console.WriteLine($"- {medico.Nome}");
}

// Teste 4 do slide: Teste com id 99 (deve retornar 0 sem dar erro)
Console.WriteLine($"\nTotal para especialidade 99 (Esperado 0): {MedicosDaEspecialidade(99).Count}");


// ==========================================
// MÉTODOS DOS EXERCÍCIOS
// ==========================================

// Método do Ciclo 1
static string PeriodoDoDia(int hora)
{
    if (hora < 7 || hora >= 19) return "Fora do expediente";
    else if (hora < 12) return "Manhã";
    else return "Tarde";
}

// Método do Ciclo 2 (Sua resposta do slide!)
static List<Medico> MedicosDaEspecialidade(int especialidadeId)
{
    return ClinicaEmMemoria.Medicos
        .Where(m => m.EspecialidadeId == especialidadeId)
        .OrderBy(m => m.Nome)
        .ToList();
}

// ==========================================
// SIMULAÇÃO DA CLÍNICA (Para o código funcionar)
// ==========================================
public class Medico
{
    public string Nome { get; set; }
    public int EspecialidadeId { get; set; }
}

public static class ClinicaEmMemoria
{
    public static List<Medico> Medicos = new List<Medico>
    {
        new Medico { Nome = "Carlos Mendes", EspecialidadeId = 1 },
        new Medico { Nome = "Ana Prado", EspecialidadeId = 1 },
        new Medico { Nome = "Mariana Silva", EspecialidadeId = 2 }
    };
}


