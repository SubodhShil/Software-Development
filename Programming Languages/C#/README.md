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
