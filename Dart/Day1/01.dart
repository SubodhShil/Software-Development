import 'dart:io';

void main() {
  //   stringFunc();
  //   func1();
  //   func2();
  //   func3();
  //   func4();
  //   func5();
  //   func6();
  //   func7();
  func8();
}

void stringFunc() {
  String name = "Subodh";
  print("My name is ${name}");
}

void func1() {
  var name = "Subodh";
  print("Hello ${name}");

  int num1 = 10, num2 = 3;
  double x = 25.53;
  double sum = num1 + num2 + x;
  print("Sum = ${sum}");
}

void func2() {
  // constant value
  const PI = 3.1416;
  print("Value of PI is: ${PI}");

  double price = 242.235;
  double priceFixed = double.parse(price.toStringAsFixed(2));
  print(priceFixed.runtimeType);

  // convert string into number
  String numStr1 = "2534";
  String numStr2 = "2534.5324";
  int num1 = int.parse(numStr1);
  double num2 = double.parse(numStr2);
  print("Value ${num1} and type = ${num1.runtimeType}");
  print("Value ${num2} and type = ${num2.runtimeType}");

  // convert double to int
  double num3 = 10.421;
  int num4 = num3.toInt();
  print("Double ${num3} and value ${num4}");
}

void func3() {
  List<String> names = ["Subodh", "Chandra", "Shil"];
  print(names.length);

  //   for (var name in names) {
  //     print(name);
  //   }

  names.forEach((name) {
    print(name);
  });
}

void func4() {
  Set<int> numbers = {1, 2, 3, 4, 4, 5, 5};
  numbers.forEach((num) {
    print(num);
  });
}

void func5() {
  var name = "Subodh", age = 25;
  print("My name is $name and I am $age years old");

  Map<String, String> myDetails = {
    "Name": "Subodh Chandra Shil",
    "University": "Shanto-Mariam University of Creative Technology",
    "CGPA": "3.69",
  };

  myDetails.forEach((key, value) {
    print("$key = $value");
  });
}

void func6() {
  int num1 = 52;
  int unaryMinus = -num1;
  print(unaryMinus);

  // integer division
  int intDiv = num1 ~/ 5;
  print("Integer division value $intDiv");

  const PI = 3.1416;
  if (PI is double) {
    print("Double data type");
  } else {
    print("Data type is ${PI.runtimeType}");
  }
}

void func7() {
  stdout.write("Enter your name: ");
  String? name = stdin.readLineSync();
  print("Your name = $name");

  stdout.write("Enter your age: ");
  int? age = int.parse(stdin.readLineSync()!);
  print("Age = $age");

  stdout.write("Enter your CGPA: ");
  double? cgpa = double.parse(stdin.readLineSync()!);
  print("CGPA = $cgpa");
}

void func8() {
  // split string
  String allNames = "Ram, Hari, Shyam, Gopal";
  List<String> listNames = allNames.split(",");

  listNames.forEach((name) {
    print(name.trim());
  });

  // map and transform values
  var numbers = [1, 2, 3, 4];
}
