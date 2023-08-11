package threads;

class MyThread3 extends Thread{
    public void run(){
        int count = 1;
        while (true){
            System.out.println("Inside Thread3: " + count++);
        }
    }
}

public class Threads2 {
    public static void main(String[] args) {
        MyThread3 th = new MyThread3();

        // A daemon thread will have the least priority, even less than that of the main
        // function so the main function will end without executing the daemon thread.
        // To prevent this behaviour we can use the join method.
        th.setDaemon(true);
        th.start();

        // Sleep current thread for 1 sec so that we can see threads.MyThread3 getting exited after
        // main terminates
        try{
            Thread.sleep(1000);
        } catch (Exception e){
            System.out.println(e);
        }

        // Join the main thread so that the main fn exits only after all threads finish exec
        Thread main = Thread.currentThread();
        try{
            main.join();
        } catch (Exception e){
            System.out.println(e);
        }

        // Using the yield method, the current thread(Main thread) will give more time
        // to other threads
        try{
            int count = 1;
            while (true){
                System.out.println("Inside Main: " + count++);
                Thread.yield();
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
