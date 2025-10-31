<?php
$dataFile = 'savedata.txt';
$tableData = [];

// Load data if file exists
if (file_exists($dataFile)) {
    $json = file_get_contents($dataFile);
    $tableData = json_decode($json, true) ?? [];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['calendar'])) {

    $calendar = $_POST['calendar'];

    // Save to file
    file_put_contents('savedata.txt', json_encode($calendar));

    // Redirect to same page to reload latest data
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}
?>

<html lang="en">

<head>
    <meta name="author" content="Titus Lamb">
    <title>Calendar</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h3 id="ccc" class="title">Calendar</h3>

    <form method="post">

        <table id="calendar">
            <thead>
                <tr>
                    <th><button type="button" id="type_button" onclick="switch_mode()"><b>Full Mode</b></button></th>
                    <th id="sunday">Sunday</th>
                    <th id="monday">Monday</th>
                    <th id="tuesday">Tuesday</th>
                    <th id="wednesday">Wednesday</th>
                    <th id="thursday">Thursday</th>
                    <th id="friday">Friday</th>
                    <th id="saturday">Saturday</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>

        <button type="submit" id="save_button" name="save"><b>Save Data</b></button>

    </form>

    <script>
        // save old data to javascript variable
        const oldData = <?php echo json_encode($tableData); ?>;
    </script>
    <script src="cal.js"></script>
</body>

</html>