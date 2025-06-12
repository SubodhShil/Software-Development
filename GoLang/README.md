# Go Programming Language

### Create Go project

-   Create a module file: `go mod init project_name`

> `A module file in go is responsible for managing dependencies and third party libraries.`  
> `The go.mod file contains information about a project. `

### To run a go program

`go run file_name.go`

---

1. The main package is a special package. Every go program must have the main package included on the top of the codebase.
2. The main function is mandatory and the entry point of the the go program.
3. fmt is a library that provide formatting for input and output to the console.

---

1. In the GoLang there is no concept like OOP, rather it handle OOP feature by enforcing the package feature. The packages are utilized instead of classes.
2. If we would like to make a go file executable then the file must contain the main package. Because the main function doesn't required to be called to run.
3. Packages are tightly coupled with directory or folder. All file in a folder have the same package.

---

1. Only identifiers (functions, variables, constants, etc.) that start with an uppercase letter are exported and accessible outside their package.
2. Any variable that value can be changed future is start with the keyword **var** then the identifier and the optional value type. Here, the type is optional because the compiler can recognize and assign default type as per first value initialization. `But for empty variables the type must assign`.
    ```go
     var age int          // Default zero value is 0
     var isGoFun bool     // Default zero value is false
     var name string      // Default zero value is an empty string
     var pointer *int     // Default zero value is nil
    ```
3. := is the short variable declaration operator.
4. Export a variable from a package
    1. First letter of the variable must be capital.
    2. The variable must be declared outside of any function or package level.
    3. It will hold the default zero value for its type.