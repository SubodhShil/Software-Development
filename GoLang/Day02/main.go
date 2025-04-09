package main

import (
	"fmt"
)

func ternary(cond bool, a, b string) string {
	if cond {
		return a
	}
	return b
}

func main() {
	fmt.Print("Day 02 on fire 🔥🔥\n\n")

	name := "Subodh"
	age := 25
	isAlive := true

	message := fmt.Sprintf("My name is %s. I am %d years old. Am I alive? %s", name, age, ternary(isAlive, "Yes", "No"))

	fmt.Print(message)
}
