package Day05;

public class P1 {
    public static void main(String[] args) {
        // f1();
        f2();
    }

    public static void f1() {
        String myName = "Subodh Chandra Shil";
        System.out.println(myName);
    }

    public static void f2() {
        StringBuffer myName = new StringBuffer("Subodh");
        myName.append(" Chandra Shil");
        System.out.println(myName + " => " + myName.getClass());

        // convert StringBuffer into a regular String
        String myNameStr = myName.toString();
        System.out.println(myNameStr + " => " + myNameStr.getClass());

        // methods
        System.out.println(myName.charAt(10));
        myName.delete(7, 14);
        System.out.println(myName);
        myName.insert(7, "Chandra");
        System.out.println(myName);
    }
}
