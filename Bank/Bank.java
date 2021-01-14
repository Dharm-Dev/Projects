/*
@author Dharm Vashisth
@Date 20 Sep 2020
@Description Implementation of a Bank.
*/
import java.util.*;
import java.lang.*;
abstract class Account{
	protected String account_no,atype;
	protected String name;
	protected int p;
	protected double bal,minBal=0;/* minBal is 0 for salary account*/
	Account(String name,String ano){
		this.name=name;
		bal=minBal;
		account_no=ano;
		p=0;
		atype="Salary";
	}
	double getBalance(){
		return bal;
	}
	String getType(){
		return atype;
	}
	void showDetails(){
		System.out.println("\nAccount Type          : "+atype);
		System.out.println("Account Number        : "+account_no+"\nAccount Holder Name   : "+name+"\nBalance               : "+bal+"\n\n");	
	}

}
class Saving extends Account{
		
		Saving(String n,int i){
			super(n,"DVSB"+i+"");
			minBal=bal=5000;
			atype="Saving";
		}
		double withdrawal(double amt){
			if(bal-minBal>amt){
				bal-=amt;
				p=0;
				System.out.println("\n\nTransaction Completed :- withdrawal of "+amt+ " .\nAvailable Balance : "+bal);
				return 1;
			}
			else if(bal>amt+(p+5)){
				p+=5;
				System.out.println("\n\n(Multiple of  5 as penalty will be charged per transaction below minimum Balance)\n");
				System.out.println("\n Available Balance   : "+bal+"\n Penalty Charged    : "+p+"\n Withdrawal Amount   :"+amt);
				bal-=amt+p;
				System.out.println("\nProcessing...\nTransaction is Successfull.\n Current Balance    : "+bal);
			}
			return 0;
		}
		double deposit(double amt){
			bal+=amt;
			System.out.println("\n\nAmount  of "+amt+ " is Deposited Successfully.\n Available Balance : "+bal);
			return 1;	
		}	
}

class Salary extends Account{
		
		Salary(String n,int i){
			super(n,"DVSL"+i+"");
		}
		double withdrawal(double amt){
			if(bal-minBal>amt){
				bal-=amt;
				System.out.println("\n\nTransaction Completed :- withdrawal of "+amt+ " .\nAvailable Balance : "+bal);
				return 1;
			}
			else{
				System.out.println("Transaction Failed :- !!Insufficient Balance.");
				return 0;
			}
			
		}
		double deposit(double amt){
			bal+=amt;
			System.out.println("\n\nAmount  of "+amt+ " is  Deposited Successfully.\n Available Balance : "+bal);
			return 1;	
		}	
}

class Current extends Account{
		
		Current(String n,int i){
			super(n,"DVCR"+i+"");
			minBal=-50000;
			atype="Current";
		}
		double withdrawal(double amt){
			if(bal-minBal>amt){
				bal-=amt;
				System.out.println("\n\nTransaction Completed :- withdrawal of "+amt+ " .\nAvailable Balance : "+bal);
				return 1;
			}
			else{
				System.out.println("Transaction Failed :- !!Insufficient Balance.");
			}
			return 0;
		}
		double deposit(double amt){
			bal+=amt;
			System.out.println("\n\nAmount  of "+amt+ " is Deposited Successfully.\n Available Balance : "+bal);
			return 1;	
		}	
}

class Bank{

	static char menuBanking(String typ){
		System.out.println("\n\nWelcome to "+typ+" Account Banking\n1.Balance Enquiry\n2.Withdrawal\n3.Deposit\n4.Account Details\n5.Exit\nEnter your Choice (1-5): ");
		Scanner inp=new Scanner(System.in);
		char c=inp.next().charAt(0);
		return c;
	}

	public static void main(String[] args){
		
		double flg;	/* flag for deposit and withdrawal*/
		int n=4;	/*Accounts in each type*/
		double amount;/* withdrawal or deposit*/
		int no;		/*Account number*/
		char opt;	/*Banking option*/
		int index;	/*user account index out of all accounts*/
		String numb;/*to store user account number*/
		
		int []ar=new int[4*n];
		String []sname=new String[4*n];
		/*Initialize Account number and Name.*/
		char ch='A';
		for(int i=0;i<4*n;i++,ch++){
			ar[i]=i+1;
			sname[i]=""+ch+"";
		}
		
		Saving []a=new Saving[n];
		Salary []b=new Salary[n];
		Current []c=new Current[n];
		
		/*Initialize objects*/
		for(int j=0;j<n;j++)
		{
			b[j]=new Salary(sname[j],ar[j]);
			a[j]=new Saving(sname[j+n],ar[j]);
			c[j]=new Current(sname[j+n+n],ar[j]);
		}

		System.out.println("\nWelcome to Java Oriented Bank.");
		
		// for(int j=0;j<n;j++)
		// {
		// 	a[j].showDetails();
		// 	c[j].showDetails();
		// 	b[j].showDetails();
		// }
		System.out.println("\n\nPlease Choose your Account Type :\n1.Salary Account\n2.Current Account\n3.Saving Account\n4.Quit\nEnter your choice(1-4)");
		Scanner inp=new Scanner(System.in);
		char choice=inp.next().charAt(0);

		switch(choice){
			case '1':
						System.out.println("Enter your Account Number Digits(Only) : ");
						inp=new Scanner(System.in);
						no=inp.nextInt();

						numb=("DVSL"+no+"");
						index=-1;
						for(int i=0;i<n;i++){
							
							if(b[i].account_no.equals(numb)){
								System.out.println("Welcome Mr."+b[i].name+"\nAccount Type :- "+b[i].getType()+" Account");
								index=i;
								break;
							}
						}
						if(index<0){
								System.out.println("!!!Account doesn't Exits");
								break;
						}
					do{
						opt=menuBanking(b[index].atype);
							switch(opt){
								case '1':
										System.out.println("\nAvailable Balance : "+b[index].getBalance());
									break;
								case '2':
										// if(b[index].getBalance()==b[index].minBal){
										// 	System.out.println("Transaction Failed :- !!!Low Balance.");
										// 	break;
										// }
										System.out.println("Enter amount to withdraw : ");
										inp=new Scanner(System.in);
										amount=inp.nextDouble();
								
										if(amount>=100 )//&& amount<b[index].getBalance())
											flg=b[index].withdrawal(amount);
										// else if(amount>b[index].getBalance()){
										// 	System.out.println("Transaction Failed. !!!Low Balance.");
										// }
										else
											System.out.println("Transaction Failed. !!!Minimum Amount must be 100.");

									break;
								case '3':
										System.out.println("Enter Deposit amount : ");
										inp=new Scanner(System.in);
										amount=inp.nextDouble();
										if(amount>=100)
											flg=b[index].deposit(amount);
										else
											System.out.println("Transaction Failed.!!!Minimum Amount must be 100.");
									break;
								case '4':
											b[index].showDetails();
											break;
								case '5':break;
								default:
										System.out.println("Invalid Choice");		
							}
						
					}while(opt!='5');
					break;
			case '2':
						System.out.println("Enter your Account Number Digits(Only) : ");
						inp=new Scanner(System.in);
						no=inp.nextInt();

						numb=("DVCR"+no+"");
						index=-1;
						for(int i=0;i<n;i++){
							
							if(c[i].account_no.equals(numb)){
								System.out.println("Welcome Mr."+c[i].name+"\nAccount Type :- "+c[i].getType()+" Account");
								index=i;
								break;
							}
						}
						if(index<0){
								System.out.println("!!!Account doesn't Exits");
								break;
						}
					do{
						opt=menuBanking(c[index].atype);
							switch(opt){
								case '1':
										System.out.println("\nAvailable Balance : "+c[index].getBalance());
									break;
								case '2':
										if(c[index].getBalance()==c[index].minBal){
											System.out.println("Transaction Failed :- !!!Negative Balance Limit Exceeds.");
											break;
										}
										System.out.println("Enter amount to withdraw : ");
										inp=new Scanner(System.in);
										amount=inp.nextDouble();
								
										if(amount>=100 )//&& amount<c[index].getBalance())
											flg=c[index].withdrawal(amount);
										// else if(amount>b[index].getBalance()){
										// 	System.out.println("Transaction Failed. !!!Low Balance.");
										// }
										else
											System.out.println("Transaction Failed. !!!Minimum Amount must be 100.");

									break;
								case '3':
										System.out.println("Enter Deposit amount : ");
										inp=new Scanner(System.in);
										amount=inp.nextDouble();
										if(amount>=100)
											flg=c[index].deposit(amount);
										else
											System.out.println("Transaction Failed.!!!Minimum Amount must be 100.");
									break;
								case '4':
											c[index].showDetails();
											break;
								case '5':break;
								default:
										System.out.println("Invalid Choice");		
							}
						
					}while(opt!='5');
					break;
			case '3':
						System.out.println("Enter your Account Number Digits(Only) : ");
						inp=new Scanner(System.in);
						no=inp.nextInt();

						numb=("DVSB"+no+"");
						index=-1;
						for(int i=0;i<n;i++){
							
							if(a[i].account_no.equals(numb)){
								System.out.println("Welcome Mr."+a[i].name+"\nAccount Type :- "+a[i].getType()+" Account");
								index=i;
								break;
							}
						}
						if(index<0){
								System.out.println("!!!Account doesn't Exits");
								break;
						}
					do{
						opt=menuBanking(a[index].atype);
							switch(opt){
								case '1':
										System.out.println("\nAvailable Balance : "+a[index].getBalance());
									break;
								case '2':
										if(a[index].getBalance()<=a[index].p){
											System.out.println("Transaction Failed :- !!!No Balance to withdraw.");
											break;
										}
										System.out.println("Enter amount to withdraw : ");
										inp=new Scanner(System.in);
										amount=inp.nextDouble();
								
										if(amount>=100)// && amount<a[index].getBalance())
											flg=a[index].withdrawal(amount);
										// else if(amount>a[index].getBalance()){
										// 	System.out.println("Transaction Failed. !!!Low Balance.");
										// }
										else
											System.out.println("Transaction Failed. !!!Minimum Amount must be 100.");
									break;
								case '3':
										System.out.println("Enter Deposit amount : ");
										inp=new Scanner(System.in);
										amount=inp.nextDouble();
										if(amount>=100)
											flg=a[index].deposit(amount);
										else
											System.out.println("Transaction Failed.!!!Minimum Amount must be 100.");
									break;
								case '4':
											a[index].showDetails();
											break;
								case '5':break;
								default:
										System.out.println("Invalid Choice");		
							}
						
					}while(opt!='5');
					break;
			case '4':System.exit(0);

			default:System.out.println("!!Invalid Credentials.Try again.");
		}
		// b.showDetails();
		// flg=b.withdrawal(1200);
		// flg=b.deposit(123);
		// flg=b.withdrawal(1200);
		// flg=b.withdrawal(1200);
		// flg=b.deposit(1123);
		System.out.println("Thanks for using our Services :-)");
		
	}
}