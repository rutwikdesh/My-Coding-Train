class Singleton {

    static private final Singleton s = new Singleton();

    private Singleton(){
        int a = 10;
        int b = 20;
        a = a + b;
        System.out.println(a);
        System.out.println(a);
    }

    static public Singleton init(){
//        if(s==null){
//            s = new Singleton();
//        }
        return s;
    }

    public static void main(String[] args) {
        Singleton a = Singleton.init();
    }
}
