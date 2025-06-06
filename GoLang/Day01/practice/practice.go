package practice

import "fmt"

var ExportVar string = "This is export variable"

func VariablesPractice() {
	var myName string = "My name is Subodh Chandra Shil"
	fmt.Println(myName)

	var num1 = 88 // it is now fixed as data type 'int'
	fmt.Println(num1)
	
	// num1 = "changed to string" // error
	num1 = 155
	fmt.Println(num1)

	var num2 float32 = 44.223
	fmt.Println(num2)

	var isTrue bool = false
	fmt.Println(isTrue)

	const PI float64 = 3.1416
	fmt.Println("PI value is: ", PI)

	// empty variables must have the type name
	var empty int
	fmt.Println(empty)

	myCountry := "Bangladesh"
	fmt.Println("My country name is:", myCountry)
}
