package test;

public class TaskWithoutResult implements Runnable{

    private int sleepTime=1000;//默认睡眠时间1s  
    public TaskWithoutResult(int sleepTime)  
    {  
        this.sleepTime=sleepTime;  
    } 
	
	@Override
	public void run() {
        System.out.println("线程"+Thread.currentThread()+"开始运行");  
        try {  
            Thread.sleep(sleepTime);  
        } catch (InterruptedException e) {//捕捉中断异常  
              
            System.out.println("线程"+Thread.currentThread()+"被中断");  
        }  
        System.out.println("线程"+Thread.currentThread()+"结束运行");  	
	}
	

}
