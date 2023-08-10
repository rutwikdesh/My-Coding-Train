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
        t.start();

        // Using Runnable interface
        Myclass tea = new Myclass();
        Thread th = new Thread(tea);
        th.start();

        // Main loop
        int i = 0;
        while(i<10){
            System.out.println("YOOO Nice!");
            i++;
        }
    }
}

class Myclass extends Threads implements Runnable {
    public void run(){
        int i = 0;
        while(i<10){
            System.out.println("DD");
            i++;
        }
    }
}
