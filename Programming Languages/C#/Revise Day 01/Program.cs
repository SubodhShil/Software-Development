using System;

public class First
{
    public static void Main(string[] args)
    {
        // userIO();
        // method1();
        // method2();
        // method3();
        // method4();
        // method5();
        JaggedArray();
    }

    public static void method1()
    {
        int a = 10;
        float b = 25.5f;
        char ch = 'x';
        bool isHuman = true;
        string str = "Hello Humans";
        Console.WriteLine($"{a}\n{b}\n{ch}\n{isHuman}\n{str}");
    }

    public static void userIO()
    {
        string userName;
        int userAge;
        float userHeight;
        bool isStudent;

        try
        {
            // Name input
            Console.Write("Enter your name: ");
            userName = Console.ReadLine() ?? "Unknown";

            // Age input
            Console.Write("Enter your age: ");
            if (!int.TryParse(Console.ReadLine(), out userAge))
                throw new FormatException("Age must be a valid number");

            // Height input
            Console.Write("Enter your height (in meters): ");
            if (!float.TryParse(Console.ReadLine(), out userHeight))
                throw new FormatException("Height must be a valid number");

            // Is student?
            Console.Write("Are you a student? (true/false): ");
            if (!bool.TryParse(Console.ReadLine(), out isStudent))
                throw new FormatException("Invalid input for student status");

            // Output Results
            Console.WriteLine($"\nHello, {userName}");
            Console.WriteLine($"Age: {userAge}");
            Console.WriteLine($"Height: {userHeight} meters");
            Console.WriteLine($"Student: {isStudent}");
        }
        catch (FormatException fe)
        {
            Console.WriteLine($"\nError: {fe.Message}");
        }
        finally
        {
            Console.WriteLine("Thanks for using the application.");
        }
    }

    public static void method2()
    {
        var random1 = "xyz";
        System.Console.WriteLine(random1.GetType());
    }

    public static void method3()
    {
        int n = int.Parse(Console.ReadLine());
        int[] arr = new int[n];

        for (int i = 0; i < n; ++i)
        {
            arr[i] = int.Parse(Console.ReadLine());
        }

        // print the array in linear fashion
        foreach (int x in arr)
            System.Console.Write($"{x} ");

        System.Console.WriteLine("");

        // print the array in backward fashion
        for (int i = 1; i <= n; ++i)
        {
            System.Console.Write($"{arr[^i]} ");
        }
    }

    public static void method4()
    {
        int[] arr = { 10, 30, 500 };
        for (int i = 0; i < arr.Length; ++i)
            System.Console.Write($"{arr[i]} ");
    }

    /* Multi-dimensional array */
    public static void method5()
    {
        int[,] matrix = new int[2, 3];

        for (int i = 0; i < matrix.GetLength(0); ++i)
        {
            for (int j = 0; j < matrix.GetLength(1); ++j)
            {
                matrix[i, j] = int.Parse(Console.ReadLine());
            }
        }

        for (int i = 0; i < matrix.GetLength(0); ++i)
        {
            for (int j = 0; j < matrix.GetLength(1); ++j)
            {
                System.Console.Write($"{matrix[i, j]} ");
            }
            System.Console.WriteLine();
        }
    }

    /* Jagged Array */
    public static void JaggedArray()
    {
        System.Console.Write("Enter the number of rows: ");
        int rows = int.Parse(Console.ReadLine());

        int[][] jaggedMatrix = new int[rows][];

        for (int i = 0; i < jaggedMatrix.GetLength(0); ++i)
        {
            Console.Write($"Enter the number of elements in row {i + 1}: ");
            int col = int.Parse(Console.ReadLine());
            jaggedMatrix[i] = new int[col];

            for (int j = 0; j < col; ++j)
            {
                jaggedMatrix[i][j] = int.Parse(Console.ReadLine());
            }
        }

        Console.WriteLine("\nThe jagged array is:");
        for (int i = 0; i < jaggedMatrix.Length; i++)
        {
            for (int j = 0; j < jaggedMatrix[i].Length; j++)
            {
                Console.Write($"{jaggedMatrix[i][j]}\t");
            }
            Console.WriteLine();
        }
    }
}
