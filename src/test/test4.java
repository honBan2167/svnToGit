package test;

import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;

public class test4 {
	public static void main(String[] args) {
		Set<String> last12Months = new HashSet<String>();
		Calendar cal = Calendar.getInstance();  
        cal.set(Calendar.MONTH, cal.get(Calendar.MONTH)-1); //要先+1,才能把本月的算进去</span>  
        for(int i=0; i<12; i++){  
        	int m = cal.get(Calendar.MONTH);
        	String mStr = (m+1)<10?"0"+(m+1):""+(m+1);
        	last12Months.add(cal.get(Calendar.YEAR)+mStr);
            cal.set(Calendar.MONTH, cal.get(Calendar.MONTH)-1); //逐次往前推1个月 
        }
        System.out.println(last12Months.toString());
	}
}

