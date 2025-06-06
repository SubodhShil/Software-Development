package Day07;

class Animal {
    String name;

    public void eat() {
        System.out.println(name + " is eating...");
    }
}

class Dog extends Animal {
    public Dog() {
        this.name = "Dog";
    }

    public void bark() {
        System.out.println(name + " is barking...");
    }
}

class Huskey extends Dog {

    public Huskey() {
        this.name = "Huskey";
    }

    public Huskey(String name) {
        this.name = name;
    }

    public void wagTail() {
        System.out.println(name + " is wagging its tail...");
    }

    public void testimony() {
        System.out.println("Hi I am a " + name + " and I am a friend of your dad!");
    }
}

class Cat extends Animal {

    public Cat() {
        this.name = "Cat";
    }

    public void meow() {
        System.out.println(name + " is meowing...");
    }
}

public class P2 {
    public static void main(String[] args) {
        Dog desi = new Dog();
        desi.eat();

        Huskey huskey = new Huskey();
        huskey.eat();
        huskey.bark();
        huskey.testimony();

        Cat persian_cat = new Cat();
        persian_cat.meow();
    }
}
