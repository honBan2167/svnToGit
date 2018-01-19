package test;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class ThreadDemo {

	public static void main(String[] args) {
		BlockingQueue blockingQueue = new ArrayBlockingQueue<>(10);  
	    ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(10, 20, 1, TimeUnit.MINUTES, blockingQueue);
	
	    for(int i=0;i<10;i++)  
        {  
            Runnable runnable=new TaskWithoutResult(1000);  
            threadPoolExecutor.submit(runnable);  
        }  
        threadPoolExecutor.shutdown();//���ᴥ���ж� �ȴ��߳��������ر�
//        threadPoolExecutor.shutdownNow();//�ᴥ���ж�  ���Ϲر��߳�
	}

}
