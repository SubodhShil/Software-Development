using System;
using System.Collections.Generic;

class Program2
{
    // string methods 
    public void f1()
    {
        string myName = "   Subodh Chandra   ";

        /// Trimming string is removing trailing and leading whitespace
        System.Console.WriteLine($"Trimming string: {myName.Trim()}");
        System.Console.WriteLine($"Uppercase all letters: {myName.Trim().ToUpper()}");
        System.Console.WriteLine($"Lowercase all letters: {myName.Trim().ToLower()}");

        /// Split the string into two parts
        // Way 01

        myName = myName.Trim();
        var idx = myName.IndexOf(' ');
        var firstName = myName.Substring(0, idx);
        var lastName = myName.Substring(idx + 1);
        System.Console.WriteLine($"First name: {firstName}\nLast name: {lastName}");

        var names = myName.Split(' ');
        System.Console.WriteLine($"Name: {names[0]}, {names[1]}");
    }
}