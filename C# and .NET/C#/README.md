> # **`C#`**

### Best practices

1. 1 file per class.

## Steps to run your first C# program

1. Create new project: `dotnet new`
2. Run file: `dotnet run`

-   Methods in C# can only be called or invoked from another method such as the 'Main' method.
-   'var' is a variable declaration keyword that can automatically determine values without any explicit value type. Variables declared with 'var' keyword can only be defined within a block scope.

### Checking data type

`variable_name.GetType().Name`

### `TryParse`

`TryParse()` is supposed to be used on a string input to check if it can be converted to an integer. This method converts the string representation of a number.

## Formatting floating point number

### 1. **Using String Interpolation**:

String interpolation allows you to specify the number of decimal places in the output.

```csharp
double number = 553432423423423.52423423423;

// Display the number with 3 decimal places
Console.WriteLine($"{number:F3}");
```

-   **`F3`**: This specifies that the number should be formatted as a fixed-point number with **3 decimal places**.

### Output:

```
553432423423423.524
```

### 2. **Using `ToString()` with Format Specifiers**:

You can also use the `ToString()` method and specify the format.

```csharp
double number = 553432423423423.52423423423;

// Display the number with 5 decimal places
Console.WriteLine(number.ToString("F5"));
```

-   **`"F5"`**: This indicates that the number should be formatted with **5 decimal places**.

### Output:

```
553432423423423.52423
```

### 3. **General Numeric Format (`G`)**:

The `G` format specifier allows you to format a number with a specified number of significant digits.

```csharp
double number = 553432423423423.52423423423;

// Display the number with 15 significant digits
Console.WriteLine(number.ToString("G15"));
```

-   **`"G15"`**: This formats the number with **15 significant digits**.

### 4. **Using `Math.Round()` to Round a Number to Specific Decimal Places**:

You can use `Math.Round()` to round the number to a specific number of decimal places before displaying it.

```csharp
double number = 553432423423423.52423423423;

// Round the number to 4 decimal places
double roundedNumber = Math.Round(number, 4);
Console.WriteLine(roundedNumber);
```

### Output:

```
553432423423423.5242
```

Class members variable

1. If a class member written without any specifier or access modifier it will implicitly treated as a 'protected' access modifier.
2.

### Arrays

Collection of item with same data type and fixed in size.

### Jagged Array

### List

A list is a collection of elements that can be extended or shrink. Unlike array, size of list can easily be modified without any special drawback.

<ins>List is dynamic in size</ins>

Types of class members

1. Instance members: এই member গুলোকে access করতে হলে আগে একটি class এর instance বা object create করে তারপরে ব্যবহার করতে হবে ।
2. Static members: এই member গুলোকে access করতে হলে class এর instance বা object create তৈরি করা লাগে না ।

✔️ Variables must be declared before use.  
✔️ Methods can be used before declaration in the same class.  
✔️ Methods from another class must be explicitly referenced.


## 1. **Equality Check: `==` vs. `Equals()`**

### `==` (Equality Operator)

-   The **`==` operator** is used to compare two values, but **its behavior depends on the type being compared**.
    -   For **value types** (like `int`, `double`, etc.), `==` compares the values.
    -   For **reference types** (like objects, arrays, and strings), `==` compares **references** (whether both variables point to the same memory location).

### `Equals()` (Method)

-   The **`Equals()` method** is defined by the **`Object` class** and can be overridden by derived classes to define custom comparison logic. This allows more control over how equality is determined.
    -   For **value types**, `Equals()` also compares values.
    -   For **reference types**, `Equals()` checks for **value equality** (content comparison) instead of reference equality (memory location).

### Example:

For **strings**, `==` checks **value equality**, and `Equals()` does the same. However, `Equals()` is more flexible, as you can override it in custom classes.

```csharp
string str1 = "hello";
string str2 = "hello";

Console.WriteLine(str1 == str2); // True (value comparison for strings)
Console.WriteLine(str1.Equals(str2)); // True (same result as == for strings)
```

For **custom objects**, `Equals()` can be overridden to check whether two objects are considered equal based on their values:

```csharp
public class Person
{
    public string Name { get; set; }

    public override bool Equals(object obj)
    {
        if (obj is Person other)
        {
            return Name == other.Name; // Compare based on name
        }
        return false;
    }
}
```

### Why Do We Need `Equals()`?

-   **Custom logic:** `Equals()` allows you to define custom equality comparisons for your own types (e.g., comparing based on values, not just memory location).
-   **Reference types:** `Equals()` is helpful to check the content equality of reference types when `==` checks memory references.

## 2. **Concatenation: `+` vs. `Concat()`**

### `+` (String Concatenation)

-   The `+` operator is the most common way to concatenate strings. It’s simple and works well for basic concatenation.

### `Concat()` (Method)

-   `String.Concat()` is a **method in the `String` class** designed for concatenating multiple strings efficiently.
-   Internally, `Concat()` avoids creating temporary string objects (which happens when you use `+` repeatedly), making it **more efficient** in scenarios with multiple concatenations, especially in loops or when dealing with large strings.

### Example:

```csharp
string firstName = "John";
string lastName = "Doe";

// Using + operator
string fullName = firstName + " " + lastName;

// Using String.Concat()
string fullName2 = string.Concat(firstName, " ", lastName);

Console.WriteLine(fullName); // John Doe
Console.WriteLine(fullName2); // John Doe
```

### Why Do We Need `Concat()`?

-   **Performance:** When concatenating many strings, `Concat()` is generally more efficient than `+`, because it avoids unnecessary intermediate string allocations.
-   **Multiple arguments:** `Concat()` can take multiple strings at once, whereas with `+`, you need to chain multiple `+` operations.

### Key Points:

-   **Use `==`** for value comparisons, and **`Equals()`** when you need custom or specialized equality logic.
-   **Use `+`** for simple concatenation, but consider **`String.Concat()`** when performance matters or when concatenating many strings at once.

### Summary:

-   **`==`** checks for reference equality in reference types and value equality in value types, while **`Equals()`** is more flexible, allowing for custom logic in object comparison.
-   **`+`** is great for simple concatenations, but **`String.Concat()`** is more efficient for performance-sensitive code (e.g., multiple concatenations).

