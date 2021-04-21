<?php 
session_start();
$source="./DataSource/data.csv";
$feedSource="./DataSource/feedback.csv";
?>
<!DOCTYPE html>
<html>
<head>
	<title>Quiz Manager</title>
	<style type="text/css">
		#result{
			background-color: lightgreen;
			text-align: center;
			margin-left: 25%;
			margin-top: 5%;
			width: 40%;
			padding: 2em;
		}
		form{
			font-size:20px;
			margin:16px;
		}
	</style>
		<!-- jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!-- bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
<body class="container">

<!-- 	<div class="row" hidden="hidden">
		<c?php
			// $file=fopen("DataSource/data.csv", 'r');
			// $line=fgetcsv($file,',');
			// echo "<h2><center>Quiz</center></h2><hr>";
			// while($line!=feof($file)){
			// 	$line=fgetcsv($file,',');
			// 	$i=0;
			// 	$j=0;
			// 	echo "Question $line[$i] : ";
			// 	$i++;
			// 	echo "$line[$i]<ol type='a'>";
			// 	$i++;
			// 	for($j=$i;$j<6;$j++) 
			// 		echo "<li> $line[$j] </li>";
			// 	echo "</ol>Correct Answer : <b>$line[$j]</b><hr>";
			// }
			// echo "<center>Best of Luck</center>";
			// fclose($file);
	?> 
	
	</div>
	 -->
	 <?php
	 	if(($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['logoff']))||!isset($_SESSION['userName'])){
			//  prevent direct access to this page. and logout functionality.
	 		session_unset();
	 		session_destroy();
	
	 		header("Location:index.php");
	 	}
	 ?>

	<div class="row bg-success">
	<!-- navbar -->
		<header class="header container bg-warning navbar-fixed" style="">
				<div class="col-sm-4">

					<p><h2>				
					<span class="glyphicon glyphicon-user"></span> 
					Mr. <?php 
								$uname=$_SESSION['userName']; 
								$score=$_SESSION['highScore'];
							echo $uname ?>
					</h2>
					</p>
					<!-- Active Users: <c?php echo $_SESSION['counter']?> -->
				</div>
				<div class="col-sm-6">
								<h3>
									<center>
									High Score
									<h4>
										<?php	echo $score; ?>
									</h4>
									</center>
								</h3>
				</div>

				<div class="col-sm-2" align="right">
					<br>
					<form method="post" action="test.php" name='formlogoff'>	
						<input type="text" name="sesname" value='av' hidden="hidden" readonly="true">  
						<input  type='submit' class="btn btn-warning" name='logoff' value='Logout' />
					</form>
					
				</div>
		</header>

		<!-- Questions body -->
		
		<div class="row" style='padding:1vw'>
			<?php
				if($_SERVER['REQUEST_METHOD']=="GET"){
									// echo "<script>alert('get');</script>";
					echo"<h2 class='row bg-info text-info'><center>Questionair</center></h2>";
					echo "<div class='col-sm-8'>";
			
					$qdivid='quesDiv';
					$optdivid='optDiv';
					echo "<div class='container'>";
						$file=fopen($source, 'r');#openning a csv file .
						$line=fgetcsv($file);#reading first row in a csv file.
						// $line=fgetcsv($file,',');#Skip first row in a csv file.
						$num=0;

						echo "<form action='test.php' method='POST'>";
						while($line!=feof($file)){	#reading till we reach end of file.
							echo"<div class='well well-lg '>";
							#reading next row of the file. and skip header for the first time read.
							$line=fgetcsv($file);
							
							#increment question number.
							$num++;

							$val="<h3 class='text-info'>  Question $num : $line[1]</h3>";
							#display question
							echo $val;
							// echo "<div id=$qdivid>$val</div>";
							#option div openning.
							echo "<div class='container'>";
							echo "<input type='radio' name='ans$num' value='a' >".$line[2]."<br>";#question options
							echo "<input type='radio' name='ans$num' value='b'>".$line[3]."<br>";
							echo "<input type='radio' name='ans$num' value='c'>".$line[4]."<br>";
							echo "<input type='radio' name='ans$num' value='d'>".$line[5]."<br>";
							echo "</div>";	#option div closed.
						  echo "</div>";#close qblock	
						}
						
						echo "<input type='text' name='qno' value=$num hidden/>";
						echo "<center><input type='submit' name='quizz' value='Submit' class='btn btn-success btn-lg' /></center><br> ";#submission button.
						
						echo "</form><br>";
						fclose($file);#closing of file.

					echo "</div></div>";#closing main outer div.
						
				}

				// compute result
				#check whether quizz is submitted or not.
				if($_SERVER['REQUEST_METHOD']=='POST'&&isset($_POST['qno'])){
					// echo "<script>alert('Post');</script>";
					#total number of question.
					$qno=$_POST['qno'];
					#openning of a file.
					$file=fopen($source, 'r');
					
					$line=fgetcsv($file);
					#question starting index
					$i=0;
					#marks
					$m=0;
					#total attempted questions
					$attempt=0;
					while(($line!=feof($file))){
						
						#reading next line.skip header
						$line=fgetcsv($file);
				
						#question number incrementation.
						$i++;
						#radipo button name.
						$rname="ans$i";
						#getting value of radio button if it is set.
						if(isset($_POST[$rname])){
							$value=$_POST[$rname];
							$attempt++;
						#display correct option => echo "$line[6]";
						#checking for the correct option.
							if($line[6]==$value){
								$m++;	#incrementing marks.
							}
						}
						
					}
					#closing the file 
					fclose($file);
					
					$correct=$m;
					$unattempt=$qno-$attempt;
					$incorrect=$qno-$correct-$unattempt;
					$percent=round($correct/$qno,4)*100;
					

					// $file=fopen("./DataSource/users.csv",'r+');
					// $line=fgetcsv($file);
					// while($line!=feof($file)){
					// 	if($uname==$line[2]){
					// 		$line[3]=$correct;
					// 		break;
					// 	}
					// }
					// fclose($file);


					#display Total marks obtained as a summary.
					// Result Display
					echo"<div id='result' class='col-sm-6' style='margin-left:25vw; margin-bottom:4vh'>";

					echo "<h2>Result Summary</h2>";
					echo "Total Number of Questions------$qno<br>";
					echo "Attempted Questions-------------$attempt<br>";
					echo "Unattempted Questions----------$unattempt<br>";
					echo "Correct Questions----------------$correct<br>";
					echo "Incorrect Questions--------------$incorrect<br>";
					echo "<br><b>Marks acheived is $m($percent %)</b><br><br>";
					
					#Remarks as per the result.
					if($percent>90){
						$rem="Excellent";
					}
					else if($percent>75){
						$rem="Good Performance";
					}
					else if($percent>60){
						$rem="Can achieve higher Marks(Keep it Up)";
					}
					else if($percent>50){
						$rem="Can Do Better";
					}
					else if($percent>40){
						$rem="Need Improvement.Try Again";
					}
					else if($percent==0){
						$rem="You have not attempted Quiz";
					}
					else
					{
						$rem="Need More Hardwork";
					}
					#remark div
					echo "<b>Remark</b> :- <u style='color:red'>$rem</u>";
					#outer div closed
					echo "</div>";#result div closed

					// Feed back form
					echo "
					<div class='col-sm-4' style='border:4px solid #096; margin-left:25vw'><br>
					<h2 id='feed'>Feedback Form</h2>
					<hr style='background-color: white'>
					<form action='test.php' method='post' class='form-inline'>
						<input type='text' name='ftitle' placeholder='Title'  class='form-control' required='required'/><br><br>
						<textarea placeholder='Feedback' rows='5' cols='20' name='feed' class='form-control'required='required' ></textarea><br>
						<br>
						<input type='submit' name='submit' class='btn btn-info'>
					</form>
					</div>
					<div class='col-sm-12' align='center'><br>
						<a href='test.php' class='btn btn-success'>Dashboard</a>
					</div>
					";
				
				}


		?>
		</div>

		<footer class="bg-warning container">
		<div class="row" align="center">
			<br>
	 			BootStrap Website Created by
	 			<a href=" https://github.com/Dharm-Dev"><b>Dharm Vashisth</b></a><span class="glyphicon glyphicon-heart"></span>
	 			<hr>
	 			<span>Copyright @ 2021</span>
	 	</div>
		</footer>

<!-- Feedback Form  -->
			<!-- <div class="col-sm-4"> -->

				
				<!-- <h1 id="feed">Feedback Form</h1>
				<hr style="background-color: white">
				<form action="test.php" method="post" class="form-inline">
					<input type="text" name="funame" placeholder="Enter your Name"  class="form-control" /><br><br>
					<textarea placeholder="Feedback" rows="5" cols="20" name='feed' class="form-control"></textarea><br>
					<br>
					<input type="submit" name="submit" class="btn btn-info">
				</form>
				 -->
				 <!-- <br> -->
				<?php
					
					if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['feed']))
					{	
						$feedback=$_POST['feed'];
				
							$file=fopen($feedSource, 'a') or die("Unable to open file.");
							$line=$uname.",".$feedback;
							fwrite($file,"\n".$line);
							fclose($file);
							header("Location:test.php");
						
						
					} 
				?>
			<!-- </div> -->
		<!-- </div> -->
	</div>
</body>
</html>