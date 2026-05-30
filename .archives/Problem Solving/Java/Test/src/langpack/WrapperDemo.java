package langpack;

public class WrapperDemo {
    public static void main(String[] args) {
        // Primitive Data type int
        int i=10;
        Integer in1 = Integer.valueOf(10);
        Integer in2 = 10;

        Byte b = 15;
        Byte b1 = Byte.valueOf("16");
        byte bb = 15;
        Byte b2 = Byte.valueOf(bb);

        Short s = Short.valueOf("128");

        Float f = 12.34f;

        Double d = 123.33;

        Character c = 'y';

        Boolean bul = true;

        Float f2 = 123.3f;
        float x = f2.floatValue();
        float y = f2;  // This is called Auto-Unboxing

        int m = 12;
        Integer n = Integer.valueOf(m);
        Integer o = m;  // This is called Auto-Boxing

    }
}
