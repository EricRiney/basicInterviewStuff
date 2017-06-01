public class StringDemo {
    public static void main(String[] args) {

    
    }
        static String findNumber(int[] arr, int k) {
       String outPut = "Yes";
       for (int i = 0; i < arr.length; i++ ) {
            if (arr[i] == k) {
              return outPut;
            }
        }
        outPut = "No";
        return outPut;
        
    }


    static int[] oddNumbers(int l, int r) {
        int start = l;
        if (start % 2 == 0) {
            start++;
        }
        int end = r;
        int diff = ((end - start)/2)+1;
        int[] arr = new int[diff];
        for (int i = 0; i < diff; i++) {
            arr[i] = start;
            //System.out.print(Arrays.toString(arr));
            start +=2;
        }
        //arr[0] = 5;
        return arr;    
    }
}