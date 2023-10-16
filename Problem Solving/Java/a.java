class a {
  // private void fun() {
  // System.out.println("In a");
  // }

  public static void main(String[] args) {
    // a obj = new b();
    // obj.fun();
    Singleton.INSTANCE.show();
  }

  public enum Singleton {
    INSTANCE;

    public void show() {
      System.out.println("in class");
    }
  }
}

// class b extends a {
// public void fun() {
// System.out.println("In b");
// }
// }
