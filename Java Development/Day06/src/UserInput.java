import java.util.*;

public class UserInput {
    static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        String yourName = input.nextLine();
        System.out.println("Your name is: " + yourName);
        int age = input.nextInt();
        System.out.println("Your age is: " + age);
    }
}