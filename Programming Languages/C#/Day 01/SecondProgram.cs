public class SecondProgram
{
    public static void SecondFileM1()
    {
        Console.WriteLine("Hello from the second program");
    }

    public static void swapProgram()
    {
        System.Console.WriteLine("Enter value for a: ");
        float a = float.Parse(Console.ReadLine());
        System.Console.WriteLine("Enter vale for b: ");
        float b = float.Parse(Console.ReadLine());

        Console.WriteLine($"Before: Value of a = {a}, Value of b = {b}");
        a = a * b;
        b = a / b;
        a = a / b;
        Console.WriteLine($"After: Value of a = {a}, Value of b = {b}");
    }
}