using System;
using System.Numerics;

public class Program
{
    public static void Main(string[] args)
    {
        // primitiveTypes();
        string_chars();
    }

    public static void primitiveTypes()
    {
        /* Integer types: (-ve) 2^31 to (+ve) 2^31 */

        /// int -> 32 bit
        int integer_value1 = 33;
        System.Console.WriteLine($"Value is: {integer_value1}\nType: {integer_value1.GetType().Name}\nMaximum value of integer is: {int.MaxValue}\nMinimum Value of integer is: {int.MinValue}\n");

        /// long -> 64 bit
        long long_value1 = 4324324234234324198;
        System.Console.WriteLine($"\nValue is: {long_value1}\nType: {long_value1.GetType().Name}\nMaximum value of integer is: {long.MaxValue}\nMinimum Value of integer is: {long.MinValue}\n");

        /// decimal -> 128 bit 
        decimal very_long_value1 = 9832743298473294723947239472.4434M;
        System.Console.WriteLine($"\nValue is: {very_long_value1}\nType: {very_long_value1.GetType().Name}\nMaximum value of integer is: {decimal.MaxValue}\nMinimum Value of integer is: {decimal.MinValue}\n");

        /// Big integers: it can hold any number of size
        BigInteger bigNumber = BigInteger.Parse("5423432432423423432423423423987979798787432");
        System.Console.WriteLine($"\nValue is: {bigNumber}\nType: {bigNumber.GetType().Name}");

        /* Fractional number types */

        /// float -> 32 bit
        float float_value1 = 532432.55F;
        System.Console.WriteLine($"\nValue is: {float_value1}\nType: {float_value1.GetType().Name}\nMaximum value of integer is: {float.MaxValue}\nMinimum Value of integer is: {float.MinValue}\n");

        /// double -> 64 bit  
        double double_value1 = 323432432432.432432432432D;
        System.Console.WriteLine($"\nValue is: {double_value1}\nType: {double_value1.GetType().Name}\nMaximum value of integer is: {double.MaxValue}\nMinimum Value of integer is: {double.MinValue}\n");

        /* Character */
        char ch1 = 'A';
        System.Console.WriteLine($"\nValue is: {ch1}\nType: {ch1.GetType().Name}\n");

        string myString = "Hello World";
        System.Console.WriteLine($"\nValue is: {myString}\nType: {myString.GetType().Name}\n");

        Console.ReadLine();
    }

    public static void string_chars()
    {
        /* String to integer conversion */
        string textNumber1 = "423423423";
        int number1 = Convert.ToInt32(textNumber1);
        Console.WriteLine(number1);

        string textNumber2 = "-55343242323.524789";
        double number2 = Convert.ToDouble(textNumber2);
        Console.WriteLine(number2);

        /* Formatting floating point */
        System.Console.WriteLine($"{number2:F3}");
    }
}