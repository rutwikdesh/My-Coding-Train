public class Threads extends Thread {
    public void run(){
        int i = 0;
        while(i<10){
            System.out.println(i);
            i++;
        }
    }

    public static void main(String[] args) {
        // Using Thread class
        Threads t = new Threads();
        t.setPriority(6);
        t.start();
        System.out.println(t.getPriority());

        // Using Runnable interface
        Myclass tea = new Myclass();
        Thread th = new Thread(tea);
        th.setPriority(3);
        th.start();
//        th.setPriority(10);
        System.out.println(th.getPriority());

        // Main loop
        int i = 0;
        while(i<10){
            System.out.println("YOOO Nice!");
            i++;
        }
    }
}

class Myclass implements Runnable {
    public void run(){
        int i = 0;
        while(i<10){
            System.out.println("DD");
            i++;
        }
    }
}
