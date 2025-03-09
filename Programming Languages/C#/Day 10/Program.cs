using System;

public class Program
{
    public static void Main(string[] args)
    {
        // f1();
        // f2();
        f3();
    }

    // string formatting
    public static void f1()
    {
        // string interpolation
        string name = "Subodh";
        string welcomeMessage = $"Welcome user {name}";

        // verbatim string literal
        // verbatim string literal removes the complexity of using escape squences
        string currentDate = @"Today is 3/7/2025";
        Console.WriteLine(welcomeMessage + "\n" + currentDate);

        // mixing both: interpolated verbatim string
        string weekDay = "Friday";
        string currentDay = $@"Today is 3/7/2025 and it is {weekDay}";
        System.Console.WriteLine(currentDay);

        string test = $@"Hello, ""someone""";
        System.Console.WriteLine(test);
    }

    // string concat and comparison
    public static void f2()
    {
        string a = "Test";
        string b = "Test";

        if (a == b)
        {
            System.Console.WriteLine("a and b are same");
        }
        else
        {
            System.Console.WriteLine("Not same");
        }

        if (a.Equals(b))
        {
            System.Console.WriteLine("This is equal");
        }
        else
        {
            System.Console.WriteLine("Not equal");
        }

        // string concat
        string c = string.Concat(a, " and ", b, 3, " How are you?");
        System.Console.WriteLine(c);
    }

    // A cool string effect using Thread.Sleep()
    public static void f3()
    {
        string text = "I love the universe";

        foreach (char character in text)
        {
            System.Console.Write(character);
            System.Threading.Thread.Sleep(500); // shows next character after 500 ms or .5 sec
        }
    }
}
