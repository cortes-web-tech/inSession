<?php
	session_start();
	include "db_conn";
	if(!empty($_GET['file']))
	{
		$filename = basename($_GET['file']);
		$filepath = 'uploads/' . $filename;
		if(!empty($filename) && file_exists($filepath)){
				// Define headers
				header("Cache-Control: public");
				header("Content-Description: File Transfer");
				header("Content-Disposition: attachment; filename=" . basename($_GET['file']));
				header('Content-Type: application/force-download');
				header("Content-Transfer-Encoding: Binary");
				header('Expires: 0');
				header('Pragma: public');
				//header("Content-Length:" . filesize('uploads/' . $filename);
				readfile('uploads/' . $filename);
				exit;
			}
			else{
				//header("Location: homepage.php?error=NoFile");
				echo "</br>This file does not exist.";
				exit();
			}
		}else{
			//header("Location: homepage.php?error=File_not_found");
			exit();		
		}

	
?>

