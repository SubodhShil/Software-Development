using System;

class Program
{
    public static void Main(string[] args)
    {
        // f1();
        // f2();
        f3();
    }

    /* Single dimensional array */
    public static void f1()
    {
        int[] arr1 = new int[5] { 1, 2, 3, 4, 5 };

        /* for (int i = 0; i < arr1.Length; ++i)
        {
            System.Console.WriteLine(arr1[i]);
        } */

        /* foreach (int item in arr1)
            System.Console.Write(item + " "); */
    }

    /* Multi dimensional array */
    public static void f2()
    {
        int[,] matrix = new int[3, 3];

        System.Console.WriteLine("Enter matrix elements: ");
        for (int i = 0; i < 3; ++i)
        {
            for (int j = 0; j < 3; ++j)
            {
                matrix[i, j] = int.Parse(Console.ReadLine());
            }
        }

        System.Console.WriteLine("The matrix is:");
        for (int i = 0; i < 3; ++i)
        {
            for (int j = 0; j < 3; ++j)
            {
                System.Console.Write(matrix[i, j] + " ");
            }
            System.Console.WriteLine();
        }
    }


    /* C# Jagged array: Can contain multiple array as element 
    but unlike multi-dimensional array we can have various size
    of internal arrays */

    public static void f3()
    {
        int[][] jArray = new int[3][];
        jArray[0] = new int[5] { 3, 4, 1, 2, 3 };
        jArray[1] = new int[2] { -1, -2 };
        jArray[2] = new int[4] { 10, 20, 33, 77 };

        foreach (int[] i in jArray)
        {
            foreach (int item in i)
            {
                System.Console.Write(item + " ");
            }
            System.Console.WriteLine();
        }

        /* for (int i = 0; i < jArray.Length; ++i)
        {
            for (int j = 0; j < jArray[i].Length; ++j)
            {
                System.Console.Write(jArray[i][j] + " ");
            }
            System.Console.WriteLine();
        } */
    }

}