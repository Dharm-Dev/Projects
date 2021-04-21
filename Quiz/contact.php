<?php
	if($_SERVER['REQUEST_METHOD']=="POST" && isset($_POST['uname'])){
		echo "Got the Response";
	}
	else{
		echo "Invalid Attempt. Try agin";
	}
	echo"<br><a href='./index.php' style='text-decoration: none;'>Back to Home</a>"
?>