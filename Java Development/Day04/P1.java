package Day04;

import java.text.MessageFormat;

public class P1 {
    public static void main(String[] args) {
        Student firstStudent = new Student();
        firstStudent.name = "Subodh";
        firstStudent.age = 18;
        firstStudent.currentClass = 10;

        System.out.println(MessageFormat.format("The student named: {0}, age: {1}, is currently studying in class: {2}",
                firstStudent.name, firstStudent.age, firstStudent.currentClass));

        Student[] allStudents = new Student[1];
        allStudents[0] = firstStudent;
    }
}

class Student {
    String name;
    int age;
    int currentClass;
}
