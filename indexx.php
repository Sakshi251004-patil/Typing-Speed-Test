<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF -8" >
    <meta http-equiv="X-UA-Compatib1e" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>online Medical shop</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <script>"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"</script>    
</head>
<body>
    
    <div class="container my-5">
        <h2>List of Medicine</h2>
        <a class="btn btn-primary"href="/Medicine/create.php" role="button">New Medicine</a>
         <br>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Medicine_Name</th>
                <th>Medicine_Used</th>
                <th>Medicine_num</th>
                <th>Available</th>
            </tr>
    </thead>  
    <tbody>
        <?php
        $servername = "localhost" ;
        $username = "root" ;
        $password ="";
        $database ="medicine" ;

        $connection= new mysqli($servername, $username, $password, $database);
        if ($connection->connect_error){
            die("Connection failed: ".$connection->connect_error); 
        }
        $sql ="SELECT * FROM medicine" ;
        $result = $connection->query($sql);

        if(!$result) {
            die( " Invalid query: ".$connection->error);
        }

        while($row = $result->fetch_assoc()){
         echo  "
         <tr>     
                <td>$row[Medicine_ID]</td>
                <td>$row[Medicine_Name]</td>
                <td>$row[Medicine_use]</td>
                <td>$row[Medicine_Num]</td>
                <td>$row[Available]</td>
                <td>
                    <a class='btn btn-primary btn-sm' href='/medicine/edit.php?id=$row[Medicine_ID]' >Edit</a>
                    <a class='btn btn-danger btn-sm' href='/medicine/delete.php'>De1ete</a>
                </td>
                </tr>
                ";
    }
?>
            
            </tbody>
        </table>
    </div>
</body>
</html>