<?php
try{
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $request = json_decode(file_get_contents("php://input"));
    $contact = $request->contactInfo; //"info@trafik-mitterlehner.at";

    $message = $request->message;

    $from_name = $request->name;

    $to_email = "dev@trafik-mitterlehner.at";// $request->email;

    $email_subject = "trafik-mitterlehner.at: Neue Nachricht von $from_name erhalten";

    $email_body = " <html>
                    <head>
                        <style>
                            * {
                                font-family: sans-serif;
                                box-sizing: border-box;
                            }

                            body {
                                background-color: #42c2f5;
                            }

                            .page {
                                max-width: 1200px;
                                margin: auto;
                                margin-top: 7rem;
                                background-color: #006c99;
                                padding: 5rem;
                                color: white;
                                border-radius: 5rem;
                            }
                        
                            .item {
                                display: block;
                                position: relative;
                                padding: .5rem 0;
                                margin: 3rem 0;
                            }
                        
                            .item__title {
                                display: inline-block;
                                font-weight: 600;
                            }
                        
                            .item__value {
                                display: block;
                                font-size: 120%;
                                background-color: white;
                                color: black;
                                border-radius: 1rem;
                                padding: .5rem 1rem;
                            }
                        
                        
                            .intro {
                                display: block;    
                                margin-bottom: 7rem;   
                            }

                            .logo {
                                position: relative;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                            }

                            .logo > img {
                                display: block;
                                height: 300px;
                                width: auto;
                                text-align: center;
                                margin-top: 2rem;
                            }
                        </style>
                    </head>
                    <body>
                        <div class=\"logo\">
                            
                        </div>
                        <div class=\"page\">
                            <div class=\"intro\">
                                Eine neue Nachricht wurde mittels dem Kontakt-Formular von trafik-mitterlehner.at versendet!<br>
                                Die Nachricht finden Sie unten, Sie wird nicht separat gespeichert!<br>
                                <br>
                                Diese Mail ist die einzige Benachrichtigung!
                            </div>
                            <div class=\"message\">
                                <div class=\"message__item item\">
                                    <span class=\"item__title\">Name</span>
                                    <span class=\"item__value\">$from_name</span>
                                </div>
                                <div class=\"message__item item\">
                                    <span class=\"item__title\">Kontakt-Info</span>
                                    <span class=\"item__value\">$contact</span>
                                </div>
                                <div class=\"message_item item item--message\">
                                    <span class=\"item__title\">Nachricht</span>
                                    <span class=\"item__value\">$message</span>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>";

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: info@trafik-mitterlehner.at\n";
    $headers .= "Reply-To: info@trafik-mitterlehner.at";

    mail($to_email,$email_subject,$email_body,$headers);
    
    echo('ok');
    header('Content-Type: text/plain');

    return "info@trafik-mitterlehner.at";
} catch(exception $e){
    echo($e);
}
?>