package collections;
import java.util.*;

public class ArrayListt {
    public static void main(String[] args) {
        ArrayList<Integer> al1 = new ArrayList<>(20);

        ArrayList<Integer> al2 = new ArrayList<>(List.of(1,2,3));

        al1.add(1);
        al1.add(0,5);
        al1.addAll(al2);
        al1.set(0, 1);
        System.out.println(al1.indexOf(2));
        System.out.println(al1);

        for(Integer i : al1){
            System.out.println(i);
        }

        Iterator<Integer> it = al1.iterator();
        while(it.hasNext()){
            System.out.println(it.next());
        }
    }
}
