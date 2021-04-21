<nav class="navbar container navbar-default navbar-fixed-top" >
		<!-- <span class="nav-brand" ><big>Q</big><small>uiz</small></span> -->
    <div class="container">
		<div class="navbar-header">
            <h2 class='navbar-brand'>TechQuiz</h2>
		    <button class="navbar-toggle" data-toggle='collapse' data-target='#nav1' ><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button>
		</div>

		<div class="navbar-collapse collapse dropdown" id='nav1'>
		<!-- login form -->
			<ul class="nav navbar-nav navbar-right">
					<li><a class="navbar-header"><?php include("login.php");?></a></li>
					<li><a href="signup.php"><span class=" btn glyphicon glyphicon-user"></span> Sign Up</a></li>
			</ul>

			<ul class="nav navbar-nav">
				<li><a href="#home">Home</a></li>
				<li><a href="#ufeed">User Feedback</a></li>
				<li><a href="#about">About us</a></li>
			</ul>
			
		</div>
    </div>
	</nav>