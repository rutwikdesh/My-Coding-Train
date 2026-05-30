import java.util.*;

public class MyClass{
  public static void fun(int a){
    System.out.println(a);
  }
  public static void main(String[] args) {
    System.out.println("hi");

    Map<String, String> m = new HashMap<>();
    m.put("rose", "red");
    m.put("dandelions", "white");
    int a, b;
    a = 0;
    a++;
    a++;
    ++a;

    fun(a);

    for (String string : m.keySet()) {
      System.out.print("Key: " + string + ", ");
      System.out.print("Value: " + m.get(string) + "\n");
    }
  }
}