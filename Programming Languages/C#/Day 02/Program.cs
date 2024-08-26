using System;

public class Program
{
    public static void Main(string[] args)
    {
        // Method1();
        // string inputText = Console.ReadLine();
        // Method2("Your input is: " + inputText);
        // Console.Read();

        // additionNumbers();

        // TryCatchTest1();
        TryCatchTest2();
    }

    public static void Method1()
    {
        Console.WriteLine("Called form method 1");

        // Console.Read(); // Requires to press 'Enter' as user input in the console to proceed to the next task
    }

    public static void Method2(string text)
    {
        Console.WriteLine(text);
    }

    public static void additionNumbers()
    {
        Console.WriteLine("Enter two numbers: ");
        float num1 = float.Parse(Console.ReadLine());
        float num2 = float.Parse(Console.ReadLine());
        Console.WriteLine("Total: " + (num1 + num2));
    }

    // Exception handling
    public static void TryCatchTest1()
    {
        Console.WriteLine("Please enter a number: ");
        bool flag = true;

        while (flag)
        {
            try
            {
                int numberInput = int.Parse(Console.ReadLine());
                flag = !flag;
            }
            catch (Exception)
            {
                // throw;
                Console.WriteLine("You should have entered a number");
            }
            finally
            {
                Console.WriteLine("finally calls anyway");
            }
        }
    }

    public static void TryCatchTest2()
    {
        System.Console.WriteLine("Enter a number: ");

        bool flag = true;

        while (flag)
        {
            try
            {
                int num1 = int.Parse(Console.ReadLine());
                int num2 = int.Parse(Console.ReadLine());
                int ans = num1 / num2;
                System.Console.WriteLine(ans);
                flag = !flag;
            }
            catch (Exception)
            {
                System.Console.WriteLine("Can't divide by zero");
            }
        }
    }
}