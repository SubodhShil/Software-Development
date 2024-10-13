using System;

public class Practice1
{
    public static void Main(string[] args)
    {
        // f1();
        f2();
    }

    public static void f1()
    {
        /// creating variable with 'var' keyword requires value to be initialized during it's declaration
        /// the compiler will automatically figure out which value type if it is declared with the 'var' keyword 
        var value1 = -5234234;
        System.Console.WriteLine(value1);

        /// compiler specifies the type of a variable based on initial value, so you can't reinitialize to another type just like JS!!
        // ⚠️ // value1 = (long)5434343243279L; 

        value1 = 43424234;
        System.Console.WriteLine(value1);

        var value2 = "Subodh";
        System.Console.WriteLine($"{value2.GetType().Name}");
    }

    public static void f2()
    {
        const double PI = 3.1416;
        System.Console.WriteLine(PI);

        // once a variable is created with 'const' keyword it can't be reinitialized or updated 

        // ⚠️ // PI = 423.4;
    }
}