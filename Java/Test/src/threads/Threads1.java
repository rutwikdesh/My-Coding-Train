package threads;

class MyThread extends Thread{
    MyThread(String name){
        super(name);
        setPriority(Thread.MIN_PRIORITY + 5);
        System.out.println("In Thread 1: NICE");
    }

    public void run(){
        int i = 0;
        while(true){
            System.out.println(i++);

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

class MyThread2 extends Thread{
    MyThread2(String name){
        super(name);
        setPriority(Thread.MIN_PRIORITY + 6);
        System.out.println("In Thread 2: Yo");
    }
}

public class Threads1 {
    public static void main(String[] args) {
        MyThread t = new MyThread("My Thread 1");
        System.out.println("Thread Name: " + t.getName());
        t.start();
        System.out.println("Priority: " + t.getPriority());
        t.interrupt();

        MyThread2 t2 = new MyThread2("My Thread 2");
        System.out.println("Thread Name: " + t2.getName());
        t2.start();
        System.out.println("Priority: " + t2.getPriority());
    }
}
