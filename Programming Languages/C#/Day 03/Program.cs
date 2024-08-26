using System;

public class Program
{
    public static void Main(string[] args)
    {
        datatype_tryParse1();
    }

    public static void datatype_tryParse1()
    {
        System.Console.WriteLine("Enter temperature: ");
        string strInput = Console.ReadLine();
        float temperature = 0;

        if (float.TryParse(strInput, out temperature))
        {
            System.Console.WriteLine($"You've entered temperature: {temperature}");
        }
        else
        {
            System.Console.WriteLine("You should have entered a float type value");
        }
    }
}