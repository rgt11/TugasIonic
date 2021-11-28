<?php 

// Because we will use this php to REST API.
// Client side bisa mengambil data dari server yang berbeda
if(isset($_SERVER['HTTP_ORIGIN'])){
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$response = array();

// Included 
require_once __DIR__ . '/dbconfig.php';

// Connecting to db
$db = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());

$result = mysqli_query($db, "SELECT * FROM students") or die(mysqli_connect_error());

// Check for empty result
if(mysqli_num_rows($result) > 0){
  $response['students'] = array();

  while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    // Temp student array
    $temp_student = array();
    $temp_student['nim'] = $row['nim'];
    $temp_student['nama'] = $row['nama'];
    $temp_student['prodi'] = $row['prodi'];
    $temp_student['foto'] = $row['foto'];
    
    array_push($response['students'], $temp_student);
  }
  // Success
  $response['success'] = 1;
  echo json_encode($response);
}
else {
  $response['success'] = 0;
  $response['message'] = "Tidak ada mahasiswa yang ditemukan";
  echo json_encode($response);
}

mysqli_free_result($result);
?>