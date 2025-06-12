package main

import (
	"fmt"
)

func main() {
	const x int = 55
	// x = 53 // 🚫 constant values can't be modified
	fmt.Println(x)
	
	/* Multiple constant */
	const (
		port = 5000
		host = "localhost"
	)
}
