using System;

class Human
{
    // member variables
    private string firstName, lastName;
    float height;

    // Constructor

    public Human(string firstName, string lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Human()
    {
        System.Console.WriteLine("Are you a Human!");
    }

    public void IntroduceMySelf()
    {
        System.Console.WriteLine($"Hi, I'm {firstName} {lastName}");
    }
}