package main // the main package is required for the code to be executed

import (
	"fmt"
)

// declaring multiple constant variables
const (
	PI            = 3.1416
	melting_point = "100C"
)

func add(a int, b int) int {
	return a + b
}

// loop
func practice1() {
	// while loop
	// i := 1
	// for i <= 10 {
	// 	fmt.Println(i)
	// 	i++
	// }

	// infinite loop
	// for {
	// 	fmt.Print("Hello world")
	// }

	// for loop
	for i := 0; i < 10; i++ {
		fmt.Println(i + 1)
	}
}

func main() {
	fmt.Println("Hello universe!!")
	fmt.Println((5 + 100))

	// var name string = "Subodh"
	// name := "Subodh" // shorthand for declaring and initializing a variable
	// fmt.Println("Your name is", name)

	// age := 25
	// fmt.Println("Your age is", age)

	// fmt.Println("Value of PI is", PI)
	// fmt.Println("Melting point of water is", melting_point)

	// fmt.Println(add(5, 10))

	practice1()
}
