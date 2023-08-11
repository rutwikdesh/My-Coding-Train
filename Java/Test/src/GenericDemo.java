class Demo<T>{
    private T obj;

    public void setObj(T data){
        obj = data;
    }

    public T getObj(){
        return obj;
    }
}

public class GenericDemo<T> {

    public static void main(String[] args) {
        Demo<String> d = new Demo<>();
        d.setObj("mystring");
        System.out.println(d.getObj());
    }
}
