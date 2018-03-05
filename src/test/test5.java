package test;

import java.util.Date;

public class test5 {

	public static void main(String[] args) {
		String sql =  "select * from a where ds in(${last36Month},${xxxxx}) order by ds asc";
//		String sql =  "select * from a where ds in() order by ds asc";
		for(int k=0;k<100;k++){
			int i1 = sql.indexOf("${");
			System.out.println(i1);
			int i2 = sql.indexOf("}",i1);
			System.out.println(i2);
			if(i1==-1||i2==-1)
				break;
			String s1 = sql.substring(i1+2,i2);
			String s2 = sql.substring(i1,i2+1);
			System.out.println(s1);
			System.out.println(s2);
			sql = sql.replace(s2, "20188888");
			System.out.println(sql);
		}
		
	}

}
