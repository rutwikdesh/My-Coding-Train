package langpack;

class MyObject{
    public String toString(){
        return "My Object";
    }
}

public class LangPack {
    public static void main(String[] args) {
        Object obj1 = new Object();
        Object obj2 = obj1;
        System.out.println(obj1.equals(obj2));

        MyObject myobj1 = new MyObject();
        System.out.println(myobj1);

    }
}
