package test;

import java.util.Arrays;
import java.util.StringTokenizer;

public class test {

	public static void main(String[] args) {
//		test2();
	}
	
	static{
		test6();
	}
	
	static void test1(){
		for(int i = 0 ; i++ < 10 ;){
			System.out.println(i);
		}//1-10
	}
	
	static void test2(){
		int i = 2147483647;
		int j = 1;
		System.out.println(0x7FFFFFFF);
		System.out.println((i+j) & 0x7FFFFFFF);
		System.out.println(i+j);
	}
	
	static void execption(){
		new NullPointerException();
	}
	
	static void test4(){
		StringBuilder sb=new StringBuilder();
		for(int i=0;i<10;i++){
			sb.append(i);
			sb.append(",");
		}
		String str=sb.toString();
		System.out.println(str);
		 
		StringTokenizer st=new StringTokenizer(str,",");
		String[] strToken = new String[10];
		for(int i=0;i<10;i++){
			if(st.hasMoreTokens()){
				strToken[i]=st.nextToken();
			}
		}
		System.out.println(Arrays.toString(strToken));
	}
	
	static void test5(){
		int a = 3;
		System.out.println(a<<3);//3*2*2*2
		System.out.println(a>>1);//3/2
	}
	
	static void test6(){
		
	}
	
}
