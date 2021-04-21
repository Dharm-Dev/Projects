<!DOCTYPE html>
<html>
<head>
	<title>Academic Quiz</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- /*color:#f5f6f7 new white;*/

	#1abc9c; /* Green */
	#474e5d; /* Dark Blue */
	#555555;	/*gray shade*/
	#2f2f2f; /* Black Gray */

	 -->

	<!-- <link src="style.css" > -->
	<link rel="stylesheet" href="style.css">
	<!-- jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body class="container padding">
<!--  navbar  -->
	<?php
		include("navbar.php");
	?>
	
<!-- Row Home -->
 	<div class="row" id='home'>
		<br><br>
		<!-- Content Here -->
		<div class="col-sm-8 padding">
			<h1>Content Here!</h1>
			<p>
				A quiz is a form of game or mind sport in which players attempt to answer questions correctly. It is a game to test knowledge about a certain subject. In some countries, a quiz is also a brief assessment used in education and similar fields to measure growth in knowledge, abilities, and/or skills.
			</p>
			<h2>World Record</h2>
			<dd>The largest quiz, according to Guinness, was the "Quiz for Life", held at the Flanders Expo Halls in Ghent, Belgium, on 11 December 2010 with 2,280 participants. The winning team Café De Kastaar from Leuven consisted of Marnix Baes, Erik Derycke, Eric Hemelaers, Bart Permentier and Tom Trogh.</dd>
		</div>
		<!-- Top performer Column -->
		<div class="col-sm-4 padding">
			<h1>Top Performer</h1>
			<ul type="none">
				<?php 
					$file=fopen("./DataSource/topper.csv", 'r');

					$line=fgetcsv($file);
					while($line!=feof($file)){
							$line=fgetcsv($file);
							echo "<li><big>$line[0] . <span class='glyphicon glyphicon-user' ></span> $line[1]  ($line[2]) </big></li>";
					}
					fclose($file);
					// $Tname=['Dharm','Ramesh','Manish','Rohit','Abhishek'];
					// foreach($Tname as $nm){
					
					// }
				?>
			</ul>
		</div>

		<!--
			Total Users
			 <div class="col-sm-3">
	
			<h1>Active Users </h1>
			<c?php 
					// $file=fopen("./DataSource/users.csv", 'r');
					// $line=fgetcsv($file);
					// $i=1;
					// while($line!=feof($file)){
					// 		$line=fgetcsv($file);
					// 		echo "<li><big>$i . <span class='glyphicon glyphicon-user' ></span> $line[2]  ($line[0])[$line[1]] </big></li>";
					// 	$i++;
					// }
					// fclose($file);

				?>
		</div>
		 -->
	</div>
<!--  Jumbotron -->
	<div class="jumbotron" style="background:rgb(152,25,21);color:white">
	<br><br>
			<h1>What are you Waiting For ?</h1>
			<p> Login to Your Account and Put your name on Top Performer</p>
		
	</div>
<!-- ROw Role in Education -->
	 <div class="row  ">  
	 <!-- well -->
		
		<h2>Role in Education</h2>
		<p>
			In an educational context, a quiz is usually a form of a student assessment, but often has fewer questions of less difficulty and requires less time for completion than a test. This use is typically found in the United States, Canada, the Philippines, and some colleges in India. For instance, in a mathematics classroom, a quiz may check comprehension of a type of mathematical exercise. Some instructors schedule a daily or weekly quiz ranging from five to thirty relatively easy questions for the purpose of having the students review their previous lessons before attending the next class. A "pop quiz" is a quiz that students are given no time to prepare for; they are simply surprised with it in class.
		</p>
	</div>
	<!-- Feedback Row -->
	<div class="row" id='ufeed' style="border:1px groove white">
	
		<?php include("feedback.php"); ?>

	</div>
	<br>
<!-- extra info row -->
	<div class="row  bg-in" style="padding:21px">
		<h3>Extras</h3>
		Additionally, a personality quiz may be a series of multiple-choice questions about the respondent without right or wrong answers. The responses to these questions are tallied according to a key, and the result purports to reveal some quality of the respondent. This kind of "quiz" was originally popularized by women's magazines such as Cosmopolitan. They have since become common on the Internet, where the result page typically includes code which can be added to a blog entry to publicize the result. These postings are common on LiveJournal.

		There are also many online quizzes. Many webmasters have quiz sections on their websites and forums; for instance, phpBB2 has one MOD (modification) which allows users to submit quizzes, called the Ultimate Quiz MOD.[6]

		The results of online quizzes are generally to be taken lightly, as they do not often reflect the true personality or relationship. They are also rarely psychometrically valid. However, they may occasion reflection on the subject of the quiz and provide a springboard for a person to explore his or her emotions, beliefs, or actions.
	</div>

	<!-- Footer  -->
	<footer class="row  footer">
		 	<!-- Top button -->
			 <div class="row">
	 		
			 	<a href="#home" class="btn btn-default btn-block btn-xs">
    				<span class="glyphicon glyphicon-chevron-up"></span>
				</a>
		
			</div>
	<div class="row">
		<!-- Column 1 -->
	 	<div id='about' class="col-sm-8">
		 <br><br>
	 		<h1>About us</h1>
	 		<h3>
	 				Visitors to your About Us page spend 80% of their time looking at information located above the fold, according to recent studies using heat maps to detect reader interest.

					Content positioned in the upper half of a web page is visible without scrolling down, so naturally it gets read more than the lower half of the page (below the fold). Makes sense, right?

					With that in mind, you want to include your value proposition — the innovation, service or feature that makes your business appeal to customers and sets you apart from the competition — above the fold of your About Us page where it can’t be missed
	 		</h3>

	 	</div>
		<!--  Column 2 -->
	 	<div id='contactus' class="col-sm-4">	
		 <br><br>
			<h1 id="contact">Contact us</h1><hr>
			Contact us and we'll get back to you within 24 hours.<br><br>
			<form action="contact.php" method="post" class="form-inline">

				<input type="text" name="uname" placeholder="Enter your Name"  class="form-control"  required="required"/><br><br>
				<input type="email" name="uemail" placeholder="Email Id"  class="form-control"/><br><br>
				<input type="number" name="uphone" placeholder="8799376XX48" maxlength="10" minlength="10"class="form-control"><br>
				<br>
				<textarea placeholder="Query" rows="5" cols="20" class="form-control" required='required'></textarea><br>
				<!-- <input  type="radio" name="type" value="Fresher">Fresher -->
				<!-- <input type="radio" name="type" value="Experienced">Experienced<br><br> -->
				<br>
				<input type="submit" name="submit" class="btn btn-success">
			</form>
			
	 	</div>

	</div>

	 	<div class="row" align="center">
		 <br><br>
			
	 			<big>BootStrap Website Created by</big> 
	 			<a href=" https://github.com/Dharm-Dev"><b>Dharm Vashisth</b></a><span class="glyphicon glyphicon-heart"></span>
	 			<hr>
	 			<span>Copyright @ 2021</span>
	 	</div>
						<!-- <h3><font color="#fff">Location:</font></h3> -->
						<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.8737520442005!2d77.01625285625857!3d28.59449753690605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aafdb891567%3A0x10d270731c930a87!2sGuru%20Gobind%20Singh%20Indraprastha%20University!5e0!3m2!1sen!2sin!4v1598635908367!5m2!1sen!2sin"  width="240" height="220" frameborder="1" style="border:4px solid #f00;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>		
						 -->				
	 </footer>
</body>
</html>


<!-- <div class="padding-16">
		<center>
			<br><br>
			<form method="post" action="index.php" id='loginForm' class="form-inline">
				<input type="text" name="uname" placeholder="Username" id='username' required="required" class="form-control "><br><br>
				<input type="password" name="upass" placeholder="password" id="userpassword" required="required" class="form-control"><br><br>
				<input type="submit" name="btnSubmit" id='submitBtn' value="Login/Sign up" class="form-control"><br>
			</form>
		</center>
</div> -->
<!-- <c?php
	// if($_SERVER['REQUEST_METHOD']=='POST'){
	// 	$name=$_POST['uname'];
	// 	$pass=$_POST['upass'];
	// 	$file=fopen("users.csv", 'r');
	// 	$line=fgetcsv($file,',');
	// 	$status=0;
	// 	while($line!=feof($file)){
	// 		if($name===$line[0] && $pass==$line[1]){
	// 			$status=1;
	// 			echo "<script>alert('Login Success');</script>";
	// 			break;
	// 		}
	// 		$line=fgetcsv($file,',');
	// 	}
		
	// 	if(!$status)
	// 		echo "Invalid User";
	// } 
	
 ?> -->
