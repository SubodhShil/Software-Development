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

    public void IntroduceMySelf()
    {
        System.Console.WriteLine($"Hi, I'm {firstName} {lastName}");
    }
}

