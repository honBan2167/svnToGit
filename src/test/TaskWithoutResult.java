package test;

public class TaskWithoutResult implements Runnable{

    private int sleepTime=1000;//Ĭ��˯��ʱ��1s  
    public TaskWithoutResult(int sleepTime)  
    {  
        this.sleepTime=sleepTime;  
    } 
	
	@Override
	public void run() {
        System.out.println("�߳�"+Thread.currentThread()+"��ʼ����");  
        try {  
            Thread.sleep(sleepTime);  
        } catch (InterruptedException e) {//��׽�ж��쳣  
              
            System.out.println("�߳�"+Thread.currentThread()+"���ж�");  
        }  
        System.out.println("�߳�"+Thread.currentThread()+"��������");  	
	}
	

}
