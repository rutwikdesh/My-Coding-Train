package Practice;
class task1 implements Runnable {
  public void run() {
    try {
      Thread.sleep(2000);
      System.out.println("task1");
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}

class task2 implements Runnable {
  public void run() {
    try {
      Thread.sleep(2000);
      System.out.println("task2");
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}

public class Myclass {
  public static void main(String[] args) {
    Thread t1 = new Thread(new task1(), "Thread 1");
    Thread t2 = new Thread(new task2(), "Thread 2");

    t1.start();
    t2.start();

    try {
      t2.join(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Yo!");
  }
}
