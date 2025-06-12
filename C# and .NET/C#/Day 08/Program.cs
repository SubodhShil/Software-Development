using System;
using System.Collections.Generic;

class Program
{
    public static void Main(string[] args)
    {
        // f1();
        // f2();

        Program2 myProgram = new Program2();
        myProgram.f1();
    }

    public static void f1()
    {
        List<int> numberList1 = new List<int>() { 1, 2, 3 };
        numberList1.Add(4);

        //  use AddRange() method to add more than one element at a time
        numberList1.AddRange(new int[4] { 5, 6, 7, 1 });

        foreach (int i in numberList1)
            Console.Write(i + " ");

        System.Console.WriteLine($"\nFirst index of 1: {numberList1.IndexOf(1)}");
        System.Console.WriteLine($"Last index of 1: {numberList1.IndexOf(1)}");

        // numberList1.Remove(1); /// it removes first occurrence
        numberList1.RemoveAll(x => x == 1); /// it removes all occurrences

        for (int i = 0; i < numberList1.Count; ++i)
        {
            System.Console.Write(numberList1[i] + " ");
        }
    }

    public static void f2()
    {
        var dateTime = new DateTime(2024, 1, 1);
        var currentDate = DateTime.Now;
        var today = DateTime.Today;

        System.Console.WriteLine(currentDate);
        System.Console.WriteLine($"Hour: {currentDate.Hour}");
        System.Console.WriteLine($"Minute: {currentDate.Minute}");

        var tomorrow = currentDate.AddDays(1);
        var yesterday = currentDate.AddDays(-1);

        System.Console.WriteLine($"Tomorrow: {tomorrow}");
        System.Console.WriteLine(currentDate.ToLongDateString());
        System.Console.WriteLine(currentDate.ToShortDateString());
    }
}