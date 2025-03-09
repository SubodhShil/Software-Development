using System;
using System.Text;

public class Program
{
    public static void Main(string[] args)
    {
        // f1();
        // f2();
        // f3();
        // f4();
        // f5();
        // f6();
        // f7();
        f8();
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

    public static void f4()
    {
        // check if a substring presents
        string text = "Here are you";
        System.Console.WriteLine(text.Contains("are"));

        // check if string is null or empty
        // text = "";
        text = null;

        if (text == "")
            System.Console.WriteLine("Show");
        else
            System.Console.WriteLine("Not show");

        // if (string.IsNullOrEmpty(text))
        //     System.Console.WriteLine("Empty string");
        // else
        //     System.Console.WriteLine("Not empty");
    }

    public static void f5()
    {
        string text = "Rotten world";
        System.Console.WriteLine(text.Substring(0, 6));
    }

    public static void f6()
    {
        // character string
        char[] charStr = { 'I', ' ', 'W', 'i', 'n' };
        System.Console.WriteLine(charStr);
        System.Console.WriteLine(charStr.GetType());

        // converting into string
        string str1 = new string(charStr);
        System.Console.WriteLine(str1.GetType());
    }

    // Simple password matching
    public static void f7()
    {
        System.Console.Write("Enter your password: ");
        string password1 = Console.ReadLine();

        System.Console.Write("Enter password again: ");
        string password2 = Console.ReadLine();

        if (
            !password1.Equals(string.Empty)
            && !password2.Equals(string.Empty)
            && password1.Equals(password2)
        )
        {
            System.Console.WriteLine("Password matched");
        }
        else
        {
            System.Console.WriteLine("Password didn't matched");
        }
    }

    /* StringBuilder */
    public static void f8()
    {
        StringBuilder sb1 = new StringBuilder("Subodh", 10);
        System.Console.WriteLine($"{sb1.ToString()}\nSize: {sb1.Length}");

        sb1.Append(" Chandra Shil");
        Console.WriteLine(sb1.ToString());
        Console.WriteLine(sb1.Length);
    }
}
