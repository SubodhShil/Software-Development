package Day04;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Scanner;
import java.util.*;

public class P2 {
    static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        // f1();
        // f2();
        // f3();
        f4();
    }

    public static void f1() {

        System.out.print("Enter n: ");
        int n = input.nextInt();
        int[] values = new int[n];

        for (int i = 0; i < n; i++) {
            values[i] = input.nextInt();
        }

        /* for (int i = 0; i < values.length; ++i) {
            System.out.println("Value " + (i + 1) + ": " + values[i]);
        } */
        
        /* for(int num : values) 
        {
            System.out.print(num + " ");
        } */

        System.out.println(Arrays.toString(values));
    }

    public static void f2() {
        int[][] arr2D  = {
            {1, 2, 3},
            {4, 5}, 
            {6, 7, 8}
        };

        for(int[] item : arr2D){
            for(int num : item) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }

    // 1D ArrayList 
    public static void f3() {
        ArrayList<Integer> values = new ArrayList<>(10);
        values.add(100);
        values.add(200);
        values.add(300);

        // add multiple values together 
        values.addAll(Arrays.asList(400, 500));

        ArrayList<Integer> values2 = new ArrayList<>(Arrays.asList(15, 20, 25));
        ArrayList<Integer> values3 = new ArrayList<>(Arrays.asList(30, 40, 50));

        // add multiple ArrayList in an ArrayList
        values.addAll(values2);
        values.addAll(values3);

        /* for(int num : values) {
            System.out.print(num + " ");
        } */

        for (int i = 0; i < values.size(); i++) {
            System.out.print(values.get(i) + " ");
        }
    }

    public static void f4() {
        ArrayList<ArrayList<Integer>> list = new ArrayList<>();
        System.out.print("Enter the size for outer list and inner list size: ");

        int n = input.nextInt();
        int m = input.nextInt();
        
        for (int i = 0; i < n; ++i) {
            list.add(new ArrayList<>(m));
        }

        for(int i = 0; i < n; ++i) {
            for(int j = 0; j < m; ++j) {
                list.get(i).add(input.nextInt());
            }
        }

        /* Iterating a 2D ArrayList */
        for(ArrayList<Integer> innerList : list) {
            for(Integer value : innerList) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }
}
