import java.util.*;

public class a {
  public static void main(String[] args) {
    List<Integer> arr = new ArrayList(Collections.nCopies(10, new ArrayList<>(Collections.nCopies(10, 0))));

    arr.add(10);
  }
}