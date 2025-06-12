package main

import (
	"day01/myPackage"
	"day01/practice"
	"fmt"
)

func main() {
	fmt.Println("Hello Guys")
	fmt.Println("Hello for the second time")

	myPackage.PrintMessage("All is good")
	practice.VariablesPractice()
	fmt.Println(practice.ExportVar)
}
