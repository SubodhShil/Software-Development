import java.util.Arrays;
import java.util.Scanner;

public class P1 {

    static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        // p1();
        // p2();
        // p3();
        // p4();
        p5();
    }

    public static void p1() {
        // Syntax Array

        // Initialized array size
        int[] myArray = new int[10];

        for (int i = 0; i < myArray.length; i++) {
            System.out.println((myArray[i] + 1) * 5);
        }

        // Directly value assignment
        int[] myArray2 = { 10, 2, 33, -5, 77 };
    }

    /* 1D Array */
    public static void p2() {
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] myArray = new int[size];

        for (int i = 0; i < myArray.length; ++i) {
            myArray[i] = input.nextInt();
        }

        // for (int item : myArray) {
        // System.out.println(item);
        // }

        /// another precise way to print
        System.out.println(Arrays.toString(myArray));
    }

    public static void p3() {
        String[] str = new String[3];
        for (int i = 0; i < str.length; ++i) {
            str[i] = input.next();
        }

        System.out.println(Arrays.toString(str));
    }

    /* 2D arrays */
    public static void p4() {
        System.out.print("Row: ");
        int row = input.nextInt();
        System.out.print("Column: ");
        int col = input.nextInt();

        int[][] matrix = new int[row][col]; // adding row is mandatory

        /* Input */
        for (int i = 0; i < row; ++i) {
            for (int j = 0; j < col; ++j) {
                matrix[i][j] = input.nextInt();
            }
        }

        System.out.println();

        /* Output */
        for (int i = 0; i < row; ++i) {
            for (int j = 0; j < col; ++j) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    /* Jagged array */
    public static void p5() {
        // System.out.println();

        int nums[][] = new int[3][];
        nums[0] = new int[3];
        nums[1] = new int[4];
        nums[2] = new int[3];

        for (int i = 0; i < nums.length; ++i) {
            for (int j = 0; j < nums[i].length; ++j) {
                nums[i][j] = (int) (Math.random() * 10);
            }
        }

        for (int i[] : nums) {
            for (int j : i) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
