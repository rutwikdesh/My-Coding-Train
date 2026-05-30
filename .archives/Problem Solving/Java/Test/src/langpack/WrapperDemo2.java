package langpack;

public class WrapperDemo2 {
    public static void main(String[] args) {
        // String is immutable(unchangeable)
        String s = "Heyy";
//        s.append("gg");  Cant perform this action on a normal string since it's immutable

        // String Buffer is mutable object and it is Thread-safe
        StringBuffer s1 = new StringBuffer("HeyyBro");
        s1.append("sfd");

        // String Builder is mutable object and it is not Thread-safe but faster
        // than string buffer
        StringBuilder s2 = new StringBuilder("Noicee");
        s2.append("yoo");

        System.out.println(s1);
        System.out.println(s2);
    }
}
