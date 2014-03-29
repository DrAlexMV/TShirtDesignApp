<?php

// npm install within TS/ then grunt build

function upImg($data){

define('UPLOAD_DIR', 'images/');
$img = $data;
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . uniqid() . uniqid() . '.png';
$success = file_put_contents($file, $data);

$msg = "<img src=\"http://www.texasca.com/Shirt/$file\"/>";

return $msg;
//unlink($file);
}

function clean($a){
  $a = explode(":", $a);
  $b = $a[1];
  return $b;
}

$postdata = file_get_contents("php://input");
$json = $postdata;

$json = str_replace("{", "", $json);
$json = str_replace("}", "", $json);
$json = str_replace('"', '', $json);
$json = str_replace('data:image/png;base64,', '', $json);
$json = str_replace('uploadedImages:', '', $json);
$arr = explode(",", $json);

$numXS = clean($arr[0]);
$numS = clean($arr[1]);
$numM = clean($arr[2]);
$numL = clean($arr[3]);
$numXL = clean($arr[4]);
$numXXL = clean($arr[5]);
$color = clean($arr[6]);
$BD = clean($arr[7]);
$BD = upImg($BD);
$FD = clean($arr[8]);
$FD = upImg($FD);
$FK = clean($arr[9]);
$FK = upImg($FK);
$Brand = clean($arr[10]);
$prod = clean($arr[11]);
$cmt = clean($arr[12]); 
$Name = clean($arr[13]);
$Email = clean($arr[14]); 
$Number = clean($arr[15]);

$x = 16;
$len = count($arr);

while($x < $len){
  $img = $arr[$x];
  $counter = explode(":", $img); 
  $pics = upImg($counter[2]) . $pics . "<br/>";
  $x++;
}

$order_sum = $numXS + $numS + $numM + $numL + $numXL + $numXXL;

$msg = <<< sum
Order Sum: $order_sum <br/><br/>

Number XS: $numXS  <br/>
Number S: $numS  <br/>
Number M: $numM <br/>
Number L: $numL <br/>
Number XL: $numXL <br/>
Number XXL: $numXXL <br/>
Color: $color <br/>
Client Email: $Email <br/>
Client Number: $Number <br/>
Client Name: $Name <br/>
Comments: $cmt <br/>
Prod: $prod <br/>
Brand: $Brand <br/><br/>

FrontDesign:<br/> $FD  <br/>
BackDesign:<br/> $BD  <br/>
Frocket: <br/> $FK <br/>
Images: <br/> $pics <br/>
sum;

// Email to Admin
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'To: You <zacharycook2014@utexas.edu>' . "\r\n";
$headers .= 'From: $Name <$Email>' . "\r\n";
mail("zacharycook2014@utexas.edu", "Order of $order_sum from $Name", $msg, $headers);


// Email to client
$headers2  = 'MIME-Version: 1.0' . "\r\n";
$headers2 .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers2 .= "To: You <$Email>" . "\r\n";
$headers2 .= 'From: Customer Service <customerservice@texasca.com>' . "\r\n";

if($order_sum < 36){
mail("$Email", "Order to Low", "Sorry your order is too low to process!", $headers2);
}
else{
mail("$Email", "Order - Details", "Thank you for you order! We'll contact you shortly.", $headers2);
}



?>