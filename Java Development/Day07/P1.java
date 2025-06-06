package Day07;

class Car {
    String driver;
    int speed;
    private String color;

    public Car() {
        this.driver = "No name";
        this.speed = 0;
        this.color = "No color";
    }

    public Car(String color) {
        this.color = color;
    }

    void drive() {
        System.out.println(driver + " is driving the car at " + speed + " km/h.\n");
    }
}

public class P1 {
    public static void main(String[] args) {
        Car myCar = new Car();
        // myCar.driver = "Subodh";
        // myCar.speed = 60;

        myCar.drive();
    }
}
