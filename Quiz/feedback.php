 <div id="myCarousel" style="height:50vh;border:2px groove white; background:url('Image/back1.png'); " class="carousel slide text-center bg-danger " data-ride="carousel">
    <!-- Wrapper for slides -->
    <h1>User Feedback</h1>
    <div class="carousel-inner" role="listbox">
      
      <?php

      $count=0;
          $file=fopen("DataSource/feedback.csv", 'r');
          $line2=fgetcsv($file);
          $status=0;
          $line2=fgetcsv($file);
          echo "<div class='item active'><blockquote><p>$line2[1]</p><footer><span> $line2[0]</span></footer></div>";
          while($line2!=feof($file)){
            $line2=fgetcsv($file);
            $name=$line2[0];
            $msg=$line2[1];
            echo "<div class='item'><blockquote><p>$msg</p><footer>$name</footer></div>";
            $count++;
          }
          fclose($file);
      ?>
    </div>
    
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>

      <!-- Indicators -->
      <br><br>
    <ol class="carousel-indicators" >
      <?php 
        $i=0;
        if($count>=1){
          echo "<li data-target='#myCarousel' class='active' data-slide-to='$i'></li>";
          $i++;
          $count--;
          while($count>=0){
            echo "<li data-target='#myCarousel' data-slide-to='$i'></li>";
            $i++;  
            $count--;
          } 
        }
      ?>
    </ol>
  </div>