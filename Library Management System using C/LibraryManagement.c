/*
  Author: Dharm Vashisth.
  Description: Library Management System in procedural programming language.
  Restriction: Our member can issue almost 20 books according to the code which can be alter.
*/
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define issueLimit 20
#define nameSize 100
#define total 100	/*total members and books a library can have.*/

int nb=0,nm=0;	//Global Variables for total numberOfBooks and numberOfMembers available. 

struct books
{
	int bid,copy;
	char bname[nameSize];
};
struct member
{
	int status;
	int mid;
	char mname[nameSize];
	int totalBooks;
	int issue_book_id[total];	//list of issued books. index is book id and value is total books issued of the Id.
	/*If we want to knoe the names of book issues then we have to refer bname array*/
};

/*function to check whether a book exists or not*/
int check_book(struct books b,char bname[]);

/*function to display menu for the main screen.*/
void displayMenu();

/*Main Function*/
int main()
{
	struct books b[total];
	struct member m[total];
	char name[nameSize];	//refer to book name
	char name_m[nameSize];	//member Name
	
	int ntimes;	//ntimes to add things.
	int ch;	//choice for do while loop.
	int rdate,idate,diff;
	int rmid,rbid;/*rmid=return book memberId ,rbid=return book id*/
	int fine=0;	//use to store fine.
	int flagIssuedBooks=0,f=0,fb=0,fm=0,fmd=0,fr=0;/*f=book exist or not, fb=book found or not, fm=found member, fmd=find member to delete it, fr=found book to be return*/
	int bid,mid,issuebid;	/*bid=book id , mid=member id ,issuebid=bookid at the time of issuing*/
	int bcop=0,i,j;/*bcop=book copy,i & j for loops*/
	
	system("cls");
	do{
		
		displayMenu();
		scanf("%d",&ch);
		switch(ch)
		{
			case 1:
				printf("How many Books do you want to add? \t");
				scanf("%d",&ntimes);
				while(ntimes>0){
					
					printf("\n Enter book name->");
					scanf("%s",&name);
					printf("Enter the valid number of copies of book ->");
					scanf("%d",&bcop);
					if(bcop<1)
					{
						printf("\nInvalid number of copies\nreturning to main program.\nTry Again...\n");
						continue;
					}
					if(nb==0)
					{	//adding first book
						strcpy(b[nb].bname,name);
						b[nb].copy=bcop;
						b[nb].bid=nb;
						printf("\n Assigned Book id is  %d\n",nb);
						nb++;
					}
					else if(nb<100)
					{		
						for(i=0;i<nb;i++)
						{
							if(check_book(b[i],name)==1)
							{
								f=1;
								break;
							}						
						}
						if(f)
						{
							printf("\n Book with Book id  %d  is already exist....\nincreasing number of copies... \n",i);
							b[i].copy+=bcop;
						}
						else
						{
							b[nb].bid=nb;
							strcpy(b[nb].bname,name);
							b[nb].copy=bcop;
							printf("\n Assigned Book id is  %d\n",nb);
						
							nb++;	
						}
						
					}
					else
						printf("\nBooks overflow");	
					ntimes--;
				}
				break;
			case 2:
				if(nm<1){
					printf("Please Add Member to issue book.\n");
					break;
				}
				idate=(rand() % (31)) + 1;	//random date
				
				printf("\n Book Issue Portal \n");
				printf("\n Enter the book id->");
				scanf("%d",&issuebid);
				fb=0;
				if(issuebid<0&&issuebid>99){
					printf("!!!Invalid Book Id\n");
					break;
				}
				for(i=0;i<nb;i++)
				{
					if(i==issuebid)
					{
						fb=1;	//flag for finding of book.
						break;
					}
				}
				if(fb&&b[i].copy>0)
				{
					printf("Enter Member Id \t");
					scanf("%d",&mid);
					if(mid>nm||m[mid].status==0){
						printf("!!! Invalid Member Id\n");
						break;
					}
					if(m[mid].totalBooks>issueLimit){
						printf("Member has reached the maximum limit(%d books) of issuing book.\n Book Issue to the member with id %d and Name %s is Failed.",issueLimit,m[mid].mid,m[mid].mname);
						break;
					}
					m[mid].totalBooks++;	//indicate total books issued by the member.
					m[mid].issue_book_id[i]++;	//issuing book to a member corresponding to book id.
					
					printf("\nBook issued on -> %d ",idate);
					b[i].copy--;
				}
				else
				{
					printf("%s Book with Id %d is currently Out Of Stock\n",b[issuebid].bname,b[issuebid].bid);
				}
				break;
			
			case 3:
				if(nb<1)
				{
					printf("Please First Add Books to the Library.");
					break;
				}
				if(nm<1)
				{
					printf("Please Add Members to the Library.");
					break;
				}
				rdate=(rand() % (31)) + 1;
				diff=abs(rdate-idate);
				printf("\n Enter the Member Id \n");
				scanf("%d",&rmid);
				if(rmid>nm){
					printf("\n Member Id Doesn't Exist.\n'");
					break;					
				}
				fr=0;	//book record not found in member record.
				printf("\n enter the book id to return \n");
				scanf("%d",&rbid);		//delete id2
				if(rbid>nb){
					printf("\n Book Id Doesn't Exist.\n'");
					break;
				}
				if (m[rmid].issue_book_id[rbid]>0){
					fr=1;	//found
				}
				if(fr==1)	//book found in member record.
				{
					b[rbid].copy++;	//increment copy
					m[rmid].issue_book_id[rbid]--;	//return from member record.
					m[rmid].totalBooks--;	//update record.
					/*Fine Calulations*/
					if(diff>14){
						fine=diff*2;
						printf("\n Book Issue Duration = %d\n Pay fine = %d\n Book returned",diff,fine);
					}
					else
						printf("\n Book returned...No fine");
				}
				else
					printf("\n Invalid Member ID or Book ID.Record not Found!!!\n");
				break;
			case 4:
				if(nb<1){
					printf("Please Add Books to library.Then try to add Members\n");
					break;
				}
					printf("\nEnter member name->");
					scanf("%s",&name_m);
					if(nm==0)
					{
						m[nm].mid=nm;
						strcpy(m[nm].mname,name_m);
						m[nm].status=1;	//active status of member
						for(i=0;i<nb;i++)	//total number of books.
							m[nm].issue_book_id[i]=0;	//initialize to 0.
						printf("Member Created Successfully with Id = %d",m[nm].mid);
						nm++;
					}
					else if(nm<100)
					{
						fm=0;
						for(i=0;i<nm;i++)	//remove i1.
							if(strcmpi(m[i].mname,name_m)==0)
							{
								fm=1;	//member found.
								break;
							}
						if(fm==1)
							printf("\n Already a member...");
						else
						{
							m[nm].mid=nm;				//assigning id
							strcpy(m[nm].mname,name_m);	//assigning name
							m[nm].status=1;		//active status						
							for(i=0;i<nb;i++)	//total number of books.
								m[nm].issue_book_id[i]=0;	//initialize to 0.
						
							printf("Member Created Successfully with Id = %d",m[nm].mid);
							nm++;
						}
					}
					else
						printf("Member List Overflow\n");
				break;
			
			case 5:
				fmd=0;
				printf("\n Enter the id of member to delete->");
				scanf("%d",&mid);
				for(i=0;i<nm;i++)
				{
					if(m[i].mid==mid)
					{
						fmd=1;		//found
						break;
					}
				}
				if(fmd)
				{
					flagIssuedBooks=0;
					for(j=0;j<nb;j++){	//total number of books available.
						if(m[i].issue_book_id[j]!=0)	//check book issue record.
						{
							printf("\nMember has Issued some Books. So Member can't be deleted.\nTry Again... after clearing the Book Due\n");
							flagIssuedBooks=1;
							break;
						}
					}
					if(flagIssuedBooks)
						break;// operation failed.
					printf("Member with Id %d and Name %s has been deactivated from Records \n",i,m[i].mname);
					m[i].status=0;	//deactivating User.
				}
				else
					printf("\n Invalid member Id...");
				break;
			
			case 6:	
				if(nb<1){
					printf("Book List is currently Empty\n");
					break;
				}				
				printf("\n LIST OF %d BOOK(s) : \n",nb);
				for(i=0;i<nb;i++)
					printf(" ID-> %d \n BOOK_NAME-> %s \n COPIES-> %d \n\n",i,b[i].bname,(b[i].copy));
				break;		
			case 7:				
				if(nm<1){
					printf("Member List is currently Empty\n");
					break;
				}				
				printf("\n LIST OF %d MEMBER(s) :\n",nm);
				for(i=0;i<nm;i++){
					if(m[i].status)
						printf(" Status => Active");
					else
						printf(" Status => Not Active");
					printf("\n ID-> %d \n MEMBER_NAME-> %s  \n Books Issue -> %d \n\n",m[i].mid,m[i].mname,m[i].totalBooks);
				}
				break;
			case 8:
				exit(-1);
				break;
			default:
				printf("\n Invalid entry...try again");
		}
		
	}while(ch>0&&ch<8);
	system("pause");
	return 0;
	
}

int check_book(struct books b,char bname[]){
	if(!strcmpi(bname,b.bname))
			return 1;
	return 0;	
}

void displayMenu(){
		printf("\n \t\tMENU\n\n");
		printf("\n 1) Add a book");
		printf("\n 2) Issue a book");
		printf("\n 3) Return a book");
		printf("\n 4) Add Member");
		printf("\n 5) Delete Membership");
		printf("\n 6) List of books");
		printf("\n 7) List of members");
		printf("\n 8) Exit");
		printf("\n enter your choice-> ");	
}
