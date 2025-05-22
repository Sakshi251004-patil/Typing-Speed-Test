<?php

@include 'config.php';

session_start();

if(!isset($_SESSION['user_name'])){
   header('location:login_form.php');
}

?>

<style>
html, body {
    height: 99009vh;
    font-family: 'Open Sans', sans-serif;
  height: 900px;
  background-image: linear-gradient(to right, #A5E8DF , #C5A5E8);
  
  }
  </style>
<!DOCTYPE html>
<html lang="en">
<head>
   <body>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>user page</title>

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>

   
<div class="container">

   <div class="content">
      <h3>hi, <span>user</span></h3>
      <h1>welcome <span><?php echo $_SESSION['user_name'] ?></span></h1>
      <p>this is an user page</p>
      <a href="Typing.html" class="btn">Typing</a>
      <a href="code_10_tutorial.html" class="btn">Tutorial</a>
   </div>

</div>

</body>
</html>