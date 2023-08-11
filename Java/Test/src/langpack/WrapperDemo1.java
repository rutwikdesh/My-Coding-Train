package langpack;

public class WrapperDemo1 {
    public static void main(String[] args) {
        int m = 14;
        Integer n = m;
        Integer m1 = Integer.parseInt("123");
        Integer m2 = Integer.valueOf("12A", 16);
        Integer m3 = Integer.valueOf("0010", 2);

        System.out.println(m3);
        byte x = 2;
        int y = 2;
        Integer a = Integer.valueOf(x);
        System.out.println(a);
    }
}
