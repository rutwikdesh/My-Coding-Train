class Outer{
    static int x = 10;
    String s = "GG";
    int y = 20;

    static class Inner{
        public void dis(){
            System.out.println("HI");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("hi");
        Main.Innerr a = new Innerr();
        a.myFun();

//        Test.Inner t = new Test().new Inner();
//        t.innerDisplay();

        Outer.Inner o = new Outer.Inner();
        o.dis();
    }

    static class Innerr{
        void myFun(){
            System.out.println("YOO Nice");
        }
    }
}