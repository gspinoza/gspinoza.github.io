<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple PHP Gallery</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: center;
        }
        .gallery img {
            width: 100%;
            height: auto;
            max-width: 300px;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.css" integrity="sha512-NDcw4w5Uk5nra1mdgmYYbghnm2azNRbxeI63fd3Zw72aYzFYdBGgODILLl1tHZezbC8Kep/Ep/civILr5nd1Qw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <h1 class="my-4 text-center">PHP Image Gallery</h1>
        <div class="gallery">
            <?php

            $images = [
                [
                    'file' => '1.jpeg',
                    'title' => 'Image One',
                    'author' => 'Author One',
                    'date' => '2024-01-01'
                ],
                [
                    'file' => '2.jpeg',
                    'title' => 'Image Two',
                    'author' => 'Author Two',
                    'date' => '2024-02-01'
                ],
                [
                    'file' => '3.jpeg',
                    'title' => 'Image Three',
                    'author' => 'Author Three',
                    'date' => '2024-03-01'
                ],
                [
                    'file' => '4.jpeg',
                    'title' => 'Image Four',
                    'author' => 'Author Four',
                    'date' => '2024-03-01'
                ],
                [
                    'file' => '5.jpeg',
                    'title' => 'Image Five',
                    'author' => 'Author Five',
                    'date' => '2024-03-01'
                ]
            ];


            $dir = 'images/';

            foreach ($images as $image) {
                echo '<div class="col-md-4 mb-4">';
                echo '<div class="card">';
                echo '<img data-lity src="' . $dir . $image['file'] . '" class="card-img-top" alt="Gallery Image">';
                echo '<div class="card-body">';
                echo '<h5 class="card-title">' . htmlspecialchars($image['title']) . '</h5>';
                echo '<p class="card-text">By ' . htmlspecialchars($image['author']) . '</p>';
                echo '<p class="card-text"><small class="text-muted">Taken on ' . htmlspecialchars($image['date']) . '</small></p>';
                echo '</div>';
                echo '</div>';
                echo '</div>';
            }


                // $dir = 'images/';


                // $dir = 'images/';
                // $files = scandir($dir); // list
                // foreach ($files as $file) {
                //     if ($file !== '.' && $file !== '..') {
                //         echo '<div class="col-md-5 mb-5">';
                //         echo '<div class="card">';
                //         echo '<img data-lity src="' . $dir . $file . '" class="card-img-top" alt="Gallery Image">';
                //         echo '</div>';
                //         echo '</div>';
                //     }
                // }
            ?>
        </div>
    </div>
    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.js" integrity="sha512-5oYoOmFv0YoHObByCXkMBcpMET8SO/6eiatapAbulYAWknE6AEWZsqIHDM7PU25DpwGjPtfhFGwqjYXAufjOOQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
