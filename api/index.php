<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
// echo "working";
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM Posts";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO Posts (id, Category, Headline, Created_date, update_date, short_information, Important_dates, Application_fee, head_agelimit, agelimit_data, Admssn_details_Heading, admss_exam_name, admss_eligibility_head, admss_eligibility_head_data, Short_info_heading, Short_info_data, Link_Headline, Download_result, Download_answer_key, Download_admit_card) VALUES(null, :Category, :Headline, :Created_date, :update_date, :short_information, :Important_dates, :Application_fee, :head_agelimit, :agelimit_data, :Admssn_details_Heading, :admss_exam_name, :admss_eligibility_head, :admss_eligibility_head_data, :Short_info_heading, :Short_info_data, :Link_Headline, :Download_result, :Download_answer_key, :Download_admit_card)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':Category', $user->Category);
        $stmt->bindParam(':Headline', $user->Headline);
        $stmt->bindParam(':Created_date', $created_at);
        // $stmt->bindParam(':update_date', $user->update_date);
        $stmt->bindParam(':short_information', $user->short_information);
        $stmt->bindParam(':Important_dates', $user->Important_dates);
        $stmt->bindParam(':Application_fee', $user->Application_fee);
        $stmt->bindParam(':head_agelimit', $user->head_agelimit);
        $stmt->bindParam(':agelimit_data', $user->agelimit_data);
        $stmt->bindParam(':Admssn_details_Heading', $user->Admssn_details_Heading);
        $stmt->bindParam(':admss_exam_name', $user->admss_exam_name);
        $stmt->bindParam(':admss_eligibility_head', $user->admss_eligibility_head);
        $stmt->bindParam(':admss_eligibility_head_data', $user->admss_eligibility_head_data);
        $stmt->bindParam(':Short_info_heading', $user->Short_info_heading);
        $stmt->bindParam(':Short_info_data', $user->Short_info_data);
        $stmt->bindParam(':Link_Headline', $user->Link_Headline);
        $stmt->bindParam(':Download_result', $user->Download_result);
        $stmt->bindParam(':Download_answer_key', $user->Download_answer_key);
        $stmt->bindParam(':Download_admit_card', $user->Download_admit_card);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE Posts SET Category= :Category, Headline =:Headline, mobile =:mobile, update_date =:updated_at,short_information =:short_information, Important_dates =:Important_dates, Application_fee=:Application_fee, head_agelimit=:head_agelimit, agelimit_data=:agelimit_data, Admssn_details_Heading=:Admssn_details_Heading, admss_exam_name=:admss_exam_name, admss_eligibility_head=:admss_eligibility_head, admss_eligibility_head_data=:admss_eligibility_head_data, Short_info_heading=:Short_info_heading, Short_info_data=:Short_info_data, Link_Headline=:Link_Headline, Download_result=:Download_result, Download_answer_key=:Download_answer_key, Download_admit_card=:Download_admit_card WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':Category', $user->Category);
        $stmt->bindParam(':Headline', $user->Headline);
        // $stmt->bindParam(':Created_date', $user->Created_date);
        $stmt->bindParam(':update_date', $update_at);
        $stmt->bindParam(':short_information', $user->short_information);
        $stmt->bindParam(':Important_dates', $user->Important_dates);
        $stmt->bindParam(':Application_fee', $user->Application_fee);
        $stmt->bindParam(':head_agelimit', $user->head_agelimit);
        $stmt->bindParam(':agelimit_data', $user->agelimit_data);
        $stmt->bindParam(':Admssn_details_Heading', $user->Admssn_details_Heading);
        $stmt->bindParam(':admss_exam_name', $user->admss_exam_name);
        $stmt->bindParam(':admss_eligibility_head', $user->admss_eligibility_head);
        $stmt->bindParam(':admss_eligibility_head_data', $user->admss_eligibility_head_data);
        $stmt->bindParam(':Short_info_heading', $user->Short_info_heading);
        $stmt->bindParam(':Short_info_data', $user->Short_info_data);
        $stmt->bindParam(':Link_Headline', $user->Link_Headline);
        $stmt->bindParam(':Download_result', $user->Download_result);
        $stmt->bindParam(':Download_answer_key', $user->Download_answer_key);
        $stmt->bindParam(':Download_admit_card', $user->Download_admit_card);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM Posts WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}