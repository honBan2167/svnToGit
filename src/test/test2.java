package test;

import java.util.Optional;

public class test2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String a = "1";
		Optional<String> code = Optional.ofNullable(a);
//		code.ifPresent();
			System.out.println(code.get());
		
	}

}
