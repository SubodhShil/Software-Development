using System;

public class Program
{
    public static void Main(string[] args)
    {
        // f1();
        // f2();
        f3();
        // f4();
    }

    public static void f1()
    {
        // ternary operator: if, else-if, else
        float temperature = float.Parse(Console.ReadLine());
        string stateOfMatter = temperature > 100 ? "Gas" : temperature < 0 ? "Solid" : "Liquid";
        System.Console.WriteLine(stateOfMatter);
    }

    public static void f2()
    {
        for (int i = 1; i <= 10; ++i)
        {
            System.Console.WriteLine($"5 x {i} = {5 * i}");
        }
    }

    public static void f3()
    {
        Human firstMan = new Human("Subodh", "Shil");
        firstMan.IntroduceMySelf();
    }

    // Arrays
    public static void f4()
    {
        int[] numbers = new int[5] { 1, 2, 3, 4, 5 };

        /* for (int i = 0; i < 5; ++i)
            numbers[i] = int.Parse(Console.ReadLine()); */

        /// Iterating the array
        /* foreach (int item in numbers)
            System.Console.WriteLine(item); */

        /// Access the last value
        System.Console.WriteLine(numbers[^1]);
        /// Access the second last value
        System.Console.WriteLine(numbers[^2]);
    }

}