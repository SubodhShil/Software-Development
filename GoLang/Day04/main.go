package main

import (
	"fmt"
)

func main() {
	var x int = 5
	var y float32 = 1.5
	var z float32 = float32(x) + y

	text := "Thinking too much is an illness"

	fmt.Println(z, text)

	/* conditinoal: if -> else if  -> else */
	age := 18
	if age == 18 {
		fmt.Println("You can get a driving license")
	} else if age < 18 && age >= 16 {
		fmt.Println("You can't get a driving license but you can test drive")
	} else {
		fmt.Println("You can't drive")
	}
}
