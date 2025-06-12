package main

import (
	"fmt"
)

func for_loop() {
	for i := 0; i < 10; i++ {
		fmt.Print(i, " ")
	}
}

func while_loop() {
	i := 1
	for i <= 10 {
		fmt.Print(i, " ")
		i++
	}
}

func check_prime() {
	var n int = 7
	var isPrime bool = true

	for i := 2; i <= n/2; i++ {
		if n%i == 0 {
			isPrime = false
			break
		}
	}

	if isPrime {
		fmt.Println(n, "is a prime number")
	} else {
		fmt.Println(n, "is not a prime number")
	}
}

func main() {
	// for_loop()
	// while_loop()
	check_prime()
}
