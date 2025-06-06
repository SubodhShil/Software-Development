import java.util.*;
import java.io.*;
import java.lang.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Universe!!");

        // String a = "abcdef";
        // System.out.println(a);
        // a = a.toUpperCase();
        // System.out.println(a);

        // // Add the reverse string function
        // String reversed = reverseString(a);
        // System.out.println("Reversed: " + reversed);

        // collection1();
        // collection2();
        // collection3();
        collection4();
    }

    public static String reverseString(String str) {

        char[] charArr = str.toCharArray();
        int s = 0, e = str.length() - 1;

        while (s < e) {
            char current = charArr[s];
            charArr[s] = charArr[e];
            charArr[e] = current;
            s++;
            e--;
        }

        return new String(charArr);
    }

    public static void collection1() {
        ArrayList<Integer> intList = new ArrayList<Integer>(20);

        for (int i = 0; i < 20; i++) {
            intList.add(i * 10);
        }

        for (int i = 0; i < intList.size(); i++) {
            System.out.println(intList.get(i));
        }

        // for (Integer item : intList) {
        // System.out.println(item);
        // }
    }

    public static void collection2() {
        // mixed type ArryaList
        // just don't use any specific type name in <>
        // using mixed raw types is not recommended

        ArrayList mixedList = new ArrayList<>();
        mixedList.add(10);
        mixedList.add(10.2);
        mixedList.add(true);
        mixedList.add("Subodh");

        for (Object item : mixedList) {
            System.out.println(item);
        }
    }

    public static void collection3() {
        ArrayList<String> strList = new ArrayList<String>();
        strList.add("Subodh");
        strList.add("Chandra");
        strList.add("Shil");
        strList.add("Subodh");
        strList.add("Subodh");
        strList.add("Subodh");

        for (String item : strList) {
            System.out.println(item);
        }

        strList.remove("Subodh");
        System.out.println("\n\nAfter removing Subodh");

        for (String item : strList) {
            System.out.println(item);
        }
    }

    /// HashMap
    public static void collection4() {
        HashMap<String, Integer> wordMap = new HashMap<>();
        String sentence = "The quick      brown fox jumps over the lazy dog";
        String[] words = sentence.split("\\s+");

        for (String word : words) {
            if (wordMap.containsKey(word)) {
                int newCnt = wordMap.get(word) + 1;
                wordMap.put(word, newCnt);
            } else {
                wordMap.put(word, 1);
            }
        }

        // Iterate through the HashMap using entrySet()
        for (HashMap.Entry<String, Integer> entry : wordMap.entrySet()) {
            System.out.println("Word: " + entry.getKey() + " => " + entry.getValue());
        }
    }
}   