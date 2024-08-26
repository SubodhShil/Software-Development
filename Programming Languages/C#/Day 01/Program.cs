// Console.WriteLine("Jay Shree Krishna");

using System;

/// <summary>
/// Entry point of the application
/// </summary>

public class First
{
    static int GlobalValue = 1300;

    public static void Main(string[] args)
    {
        // method1();
        // method2();
        // SecondProgram.SecondFileM1();
        SecondProgram.swapProgram();
    }

    public static void method1()
    {
        int value = 100;
        float value2 = 10.54343f;
        string text = "We don't like this anymore";
        Console.WriteLine("Jay Shree Krishna");
        Console.WriteLine("She got 33 out of " + value);
        Console.WriteLine(text);
        Console.WriteLine(value2);

        // interpolate string
        char char1 = 'a', char2 = 'z';
        int r1 = 10, r2 = 15;
        Console.WriteLine($"Write {char1} to {char2}");
        Console.WriteLine($"It will take {r1} to {r2} months to accomplish");
    }

    public static void method2()
    {
        var key = "SS33";
        Console.WriteLine(GlobalValue + " " + key);
    }
};

