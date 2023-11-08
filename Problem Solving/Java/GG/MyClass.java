import java.util.*;

public class MyClass{
  public static void main(String[] args) {
    System.out.println("hi");

    Map<String, String> m = new HashMap<>();
    m.put("rose", "red");
    m.put("dandelions", "white");

    for (String string : m.keySet()) {
      System.out.print("Key: " + string + ", ");
      System.out.print("Value: " + m.get(string) + "\n");
    }
  }
}