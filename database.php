<html>
<head>
<title>Disp1ay records by cyber warriors</title>
</head>

<body>
<table border="2">

<tr>
<th>ID</th>
<th>Name</th>
<th>Email Address</th>
<th>Password</th>
</tr>

<?php
include ("config.php") ;
error_reporting(0) ;
$query= "select * from user_form" ;
$data= mysqli_query($conn, $query) ;
$total= mysqli_num_rows($data) ;

if ($total !=0){
while ($result=mysqli_fetch_assoc($data))
{
	echo"
    <tr>
	<td>" .$result[ ' id'] . "</td>
	<td>" .$result[ ' name'] ."</td>
	<td>" .$result[ ' email'] . "</td>
	<td>" .$result[ ' password ']. "</td>
	</tr> 
    ";
}
}
else{
	echo "No records found" ;
}
?>

</table>
</body>
</html>

