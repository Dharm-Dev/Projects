<style type="text/css">

	.form-control{
		line-height: 4vh;
	}
	.form-control:hover{
		background-color: lightyellow;
		/*color:lightyellow;*/
	}
	#signupDiv{
		height:95vh;
		background:#eef;
	}

	input[type=submit],input[type=reset]{
		margin:12px;
		padding:4px;
		background:rgb(12,43,121);
		color:white;
	}
	input[type=submit]:hover,input[type=reset]:hover{
		color:white;
		background:rgb(12,43,211);
	}
	a{
		color:red;
		padding:2px;
	}
	a:hover{
		background:tomato;
		color:white;
	}

</style>
<?php 
$defaultScore=8; ?>
<div id='signupDiv' class="padding-16">
		<center>
			<br><h1>Create New Account!</h1>
			<p>Let's begin the race.
			<br><small>(Reasom for directed to this page:
			<br>You may not have a valid Account)</small>
			</p>
			
			<br>
			
			<form method="post" action="signup.php" id='signupForm' class="form-group">
				<input type="text" name="name" placeholder="Full Name" required="required" class="form-control"><br><br>
				<input type="text" name="uname" placeholder="Username" id='username' required="required" class="form-control "><br><br>
				<input type="password" name="upass" placeholder="password" id="userpassword" required="required" class="form-control"><br><br>
				<input type="reset" name="reset"><input type="submit" name="btnSubmit" id='submitBtn' value="Create Account" class="btn">
			</form>

			<a href="./index.php" style="text-decoration: none;">Back to Home</a>
		</center>
</div>
<?php
// redirected from main page and account create request.
	if($_SERVER['REQUEST_METHOD']=='POST'){
		$name=$_POST['uname'];
		$pass=$_POST['upass'];
		$fname=$_POST['name'];
	
		$file=fopen("DataSource/users.csv", 'a') or die("Unable to open file.");
		$line=$name.",".$pass.",".$fname.",".$defaultScore;
		fwrite($file,"\n".$line);
		fclose($file);
		header("Location:index.php");
	} 
	
?>