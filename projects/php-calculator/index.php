<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Calculator</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f7f7f7;
        }
        .calculator {
            border: 2px solid #000;
            border-radius: 10px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .calculator-screen {
            width: 100%;
            height: 40px;
            background-color: #ddd;
            border: none;
            margin-bottom: 10px;
            text-align: right;
            padding-right: 10px;
            font-size: 1.5em;
        }
        .calculator-keys {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .calculator-keys button {
            height: 50px;
            font-size: 1.2em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <form method="post">
            <input type="text" class="calculator-screen" name="screen" readonly
                value="<?php echo isset($_POST['screen']) ? $_POST['screen'] : '0'; ?>">
            <div class="calculator-keys">
                <button type="submit" name="button" value="7">7</button>
                <button type="submit" name="button" value="8">8</button>
                <button type="submit" name="button" value="9">9</button>
                <button type="submit" name="button" value="+">+</button>
                <button type="submit" name="button" value="4">4</button>
                <button type="submit" name="button" value="5">5</button>
                <button type="submit" name="button" value="6">6</button>
                <button type="submit" name="button" value="-">-</button>
                <button type="submit" name="button" value="1">1</button>
                <button type="submit" name="button" value="2">2</button>
                <button type="submit" name="button" value="3">3</button>
                <button type="submit" name="button" value="*">*</button>
                <button type="submit" name="button" value="0">0</button>
                <button type="submit" name="button" value=".">.</button>
                <button type="submit" name="button" value="C">C</button>
                <button type="submit" name="button" value="/">/</button>
                <button type="submit" name="button" value="=">=</button>
            </div>
        </form>
    </div>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $screen = $_POST['screen'];
        $button = $_POST['button'];

        if ($button == "C") {
            $screen = "0";
        } elseif ($button == "=") {
            $screen = eval("return $screen;");
        } else {
            if ($screen == "0") {
                $screen = $button;
            } else {
                $screen .= $button;
            }
        }
        echo "<script>document.getElementsByName('screen')[0].value = '$screen';</script>";
    }
    ?>
</body>
</html>
