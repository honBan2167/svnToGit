package test;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class test3 {

	public static void main(String[] args) {
		int curYear = 2018;
		int curQuarter = 2;
		Map<Integer,List<Integer>> lastQuarter12 = new HashMap<Integer,List<Integer>>();
		int k = 12;
		for(int i=1;i<=4;i++){
			List<Integer> dsList = new ArrayList<Integer>();
			for(int j=curQuarter;j>=1&&k>=1;j--,k--){
				dsList.add(j);
				if(j==1){
					curQuarter = 4;
					lastQuarter12.put(curYear, dsList);
				}
			}
			if(k==0)
				break;
			curYear = curYear-1;
		}
		System.out.println(lastQuarter12);
	}

}
