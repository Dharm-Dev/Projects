<?php 
session_start();
?>
<div>
		<center>
			<form method="post" action="login.php" id='loginForm' class="form-inline">
				<input type="text" name="luname" placeholder="Username" id='username' required="required" class="form-control ">
				<input type="password" name="lupass" placeholder="password" id="userpassword" required="required" class="form-control">
				<input type="submit" name="btnSubmit" id='submitBtn' value="Sign in" class="form-control">
			</form>


		</center>
</div>
<?php
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$lname=$_POST['luname'];
		$lpass=$_POST['lupass'];

		$file=fopen("./DataSource/users.csv", 'r');
		$line2=fgetcsv($file);
		$status=0;
		while($line2!=feof($file)){
			$line2=fgetcsv($file);
			$uin=$line2[0];
			$pin=$line2[1];
			if($lname==$uin && $lpass==$pin){
				$status=1;
				$_SESSION['userName']=$line2[2];
				$_SESSION['counter']+=1;
				$_SESSION['highScore']=$line2[3];
				break;
			}
		
				
		}
		fclose($file);
		if($status==0){
			echo "<script> alert('Halla Bol'); </script>";
			header("Location:signup.php");
		}
		else{
			header("Location:test.php");
		}
	} 
	
?>