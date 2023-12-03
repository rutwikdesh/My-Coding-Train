package Practice;
public class Hello {
  public static void main(String[] args) {
    // Creating two threads
    Thread thread1 = new Thread(new Task("Thread 1"));
    Thread thread2 = new Thread(new Task("Thread 2"));

    // Start both threads
    thread1.start();
    thread2.start();

    try {
      // Using join to wait for thread1 to finish
      thread1.join();
      System.out.println("Thread 1 has finished.");

      // Using join with a specified timeout for thread2
      thread2.join(2000);
      System.out.println("Thread 2 has finished or the timeout occurred.");
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    System.out.println("Main thread continues its execution.");
  }
}

class Task implements Runnable {
  private String threadName;

  public Task(String threadName) {
    this.threadName = threadName;
  }

  @Override
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println(threadName + ": Count - " + i);
      try {
        // Simulating some work in the thread
        Thread.sleep(500);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}
