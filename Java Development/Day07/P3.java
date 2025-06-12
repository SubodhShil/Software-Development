package Day07;

/* Polymorphism 
 * Compile time polymorphism: Method overloading or operator overloading
 * Run time polymorphism: Method overriding
*/

/// Method overloading
class Sum {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

/// Method overriding
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class P3 {
    public static void main(String[] args) {
        // Compile-time polymorphism (method overloading)
        Sum add1 = new Sum();
        System.out.println(add1.add(10, 20));
        System.out.println(add1.add(10, 20, 30));

        // Run-time polymorphism (method overriding)
        Animal animal = new Dog();
        animal.sound();
    }
}