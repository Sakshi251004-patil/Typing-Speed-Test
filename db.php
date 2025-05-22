<?php
include ("config.php");
error_reporting(0) ;

$query="SELECT * FROM user_form";
$data = mysqli_query($conn, $query);

$total = mysqli_num_rows($data);

if($total !=0)
{
    ?>
   <style>
    table {
  border-collapse: collapse;
  width: 100%;
}
   html, body {
    height: 99009vh;
    height: 900px;
  background-image: linear-gradient(to right, #A5E8DF , #C5A5E8);
  }
  th, td {
 border:1px solid black;
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid #000000;
}
</style>
    <table border ="4">
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
     
        </tr>
  

    <?php
    while($result = mysqli_fetch_assoc($data))
    {
        echo "<tr>
                <td>".$result ['id']."</td> 
                <td>".$result ['name']."</td>
                <td>".$result ['email']."</td>
                <td>".$result ['password']."</td>

                <td><a href=id=$result ['id'] & name=$result ['name'] &email=$result ['email'] &pass=$result ['password']'></a></td>
                
            </tr>
             ";
}
}
else{
    echo"No records found";
}

?>
  </table>