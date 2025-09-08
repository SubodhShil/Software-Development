package main

import (
	"fmt"
)

/* with 'var' keyword we can use variable inside and outside of functions */
var globalVar int = 100

const PI = 3.14

func main() {

	/* variable declaration with with explicit keyword 'var' */
	// var age int = 27
	// var height float32 = 5.7
	// var name string = "Subodh"
	// var isCool bool = true 


	/* shorthand variable declaration */
	age := 27
	height := 5.7
	name := "Subodh"
	isCool := true


	fmt.Println("Name:", name)
	fmt.Println("Age:", age)
	fmt.Println("Height:", height, "feet")
	fmt.Println("IsCool:", isCool)

 
	/* multi-variables */
	var a, b, c int = 1, 2, 3
	fmt.Println("a:", a, "b:", b, "c:", c)


}