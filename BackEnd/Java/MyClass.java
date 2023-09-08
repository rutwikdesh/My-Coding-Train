import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

interface Animal{
    void eat();
}

class Dog implements Animal{
    @Override
    public void eat(){
        System.out.println("Dog is eating...");
    }

    public void sleep(int i){
        System.out.println("Dog is sleeping...");
    }
}

class SuperDog extends Dog{
    @Override
    public void eat(){
        System.out.println("SuperDog is eating...");
    }
}

class Cat{
    public void heyy(Animal a){
        a.eat();
    }
}

public class MyClass {
    public static void main(String[] args) {
        Animal d = new SuperDog();
        d.eat();

        Animal a = ()->{
            System.out.println("Animal is eating");
        };
        a.eat();

        Cat c = new Cat();
        c.heyy(()->{
            System.out.println("Cat is eating...");
        });
    }
}
