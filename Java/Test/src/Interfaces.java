interface Member{
    void callback();
}

class Customer implements Member{
    public void callback(){
        System.out.println("Calling member customer...");
    }
}

class Store{
    Member[] mem = new Member[100];
    int count = 0;

    void register(Member m){
        mem[count++] = m;
    }

    void sale(){
        for (int i=0;i< count;i++) {
            mem[i].callback();
        }
    }
}

class Interfaces {
    public static void main(String[] args) {
        Store s = new Store();
        Customer c = new Customer();
        s.register(c);
        s.sale();
    }
}
