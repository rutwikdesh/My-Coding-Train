public class Main {
    public static void main(String[] args) {
        System.out.println("hi");
        Main.Inner a = new Inner();
        a.myFun();
    }

    static class Inner{
        void myFun(){
            System.out.println("YOO Nice");
        }
    }
}