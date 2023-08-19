package collections;

import java.util.ArrayDeque;

public class ArrayDequee {
    public static void main(String[] args) {
        ArrayDeque<Integer> ad1 = new ArrayDeque<>();
        ad1.add(1);

        // Add at start
        ad1.offerFirst(2);

        // Add at end
        ad1.offerLast(3);

        // Delete from start
        ad1.pollFirst();

        // Delete from end
        ad1.pollLast();

        // Poll vs Remove
        // If there is no element to remove, poll will return null
        // while remove will throw an error
        System.out.println(ad1);
    }
}
