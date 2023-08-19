package collections;

import java.util.List;
import java.util.TreeSet;

public class TreeSett {
    public static void main(String[] args) {
        // TreeSet stores elements in sorted order
        TreeSet<Integer> ts1 = new TreeSet<>(List.of(10,33,3,41,21));

        System.out.println(ts1.ceiling(32));

        System.out.println(ts1);
    }
}
