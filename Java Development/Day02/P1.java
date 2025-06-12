public class P1 {
  static int x = 100;

  public static void main(String[] args) {
    // Block scope: all entities declared in a block scope is only has a lifetime
    // within it. So, invoking declared item in block scope from outside evatually
    // encounters error
    {
      int a = 10, b = 100;
      // System.out.println(a + b);
    }

    // methods();
    shadowing();
  }

  static void methods() {
    int i = 0;
    for (i = 0; i < 10; ++i)
      System.out.println(i);
  }

  static void shadowing() {
    System.out.println(x);
    int x = -100;
    System.out.println(x);
  }
}