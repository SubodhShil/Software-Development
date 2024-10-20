import java.util.Scanner;

public class P1 {
  // global scanner
  // taking input from the keyboard
  static Scanner input = new Scanner(System.in);

  public static void main(String[] args) {
    /// Calling a static method
    // userInput();

    /// Calling a non-static method: Create an object and invoke
    P1 obj = new P1();
    obj.primitiveDtypes();
  }

  static void userInput() {
    /*
     * input.next() -> takes only the first word, since terminated after whitespace
     * input.nextLine() -> takes the whole line including whitespace, terminated
     * when '\n' is triggered
     */

    // String saved = input.next();
    String saved = input.nextLine();
    System.out.println(saved);
  }

  void primitiveDtypes() {
    int valueInt1 = 12332;
    float valueFloat1 = 5324.242f;
    char ch = 'A';
    long valueLong = 434324324324324332L;
    boolean isTrue = false;

    // System.out.println("Float value: " + valueFloat1 + "\nInt value: " +
    // valueInt1);
    System.out.println();
  }
}
