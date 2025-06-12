package Day07;

abstract class Animal {

    abstract void makeSound();

    abstract void color();

    void eat() {
        System.out.println("Eating...");
    }

    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {

    @Override
    void makeSound() {
        System.out.println("Dog is barking...");
    }

    @Override
    void color() {
        System.out.println("Dog is brown in color...");
    }
}

/* Interface -> blueprint of a class */

interface Phone {
    void makeCall();

    String getModel();

    boolean isBluetoothEnabled();

    String OSVersion();
}

class GooglePixel implements Phone {

    void Phone(String model) {
        System.out.println("Model: " + model);
    }

    @Override
    public void makeCall() {
        System.out.println("Making a call...");
    }

    @Override
    public String getModel() {
        return "Pixel 4";
    }

    @Override
    public boolean isBluetoothEnabled() {
        return true;
    }

    @Override
    public String OSVersion() {
        return "Android 12";
    }

    void getPhoneDetails() {
        System.out.println("\nHere is your phone details\n-----------------------------");
        System.out.println("Model: " + getModel());
        System.out.println("Bluetooth: " + isBluetoothEnabled());
        System.out.println("OS Version: " + OSVersion());
    }
}

public class P4 {
    public static void main(String[] args) {
        Dog dogesh = new Dog();
        dogesh.makeSound();
        dogesh.color();
        dogesh.eat();
        dogesh.sleep();

        GooglePixel pixel4 = new GooglePixel();
        pixel4.getPhoneDetails();
    }
}
