import java.util.*;

public class MyClass2 {

    private int lcsDp(String s1, String s2, int i, int j, ArrayList<ArrayList<Integer>> dp){
        if(i<0 || j<0)
            return 0;

        if(dp.get(i).get(j)!=-1)
            return dp.get(i).get(j);

        int res = 0;
        if(s1.charAt(i)==s2.charAt(j)){
            res = lcsDp(s1, s2, i-1, j-1, dp);
            dp.get(i).set(j, res);
        }
        else{
            res = Math.max(lcsDp(s1, s2, i-1, j, dp), lcsDp(s1, s2, i, j-1, dp));
            dp.get(i).set(j, res);
        }
        return res;
    }
    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> arr = new ArrayList<>(Collections.nCopies(10, new ArrayList<>(Collections.nCopies(10, 0))));

        ArrayList<ArrayList<Integer>> dp = new ArrayList<>(Collections.nCopies(text1.length(), new ArrayList<>(Collections.nCopies(text2.length(), -1))));

        System.out.println(arr.get(0).get(0));

        ArrayList<Integer> arr2 = new ArrayList<>(Collections.nCopies(10, 0));
        System.out.println(arr2.get(2));

        HashSet<Integer> s = new HashSet<>();

        arr2.add(10);
        arr2.add(20);

        for(int i: arr2){
            System.out.println(i);
        }
    }
}
