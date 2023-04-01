<meta http-equiv= "refresh" content="2;URL=index.html"> 

<?php
if(isset($_post['name']) && isset($_post['email']) && isset($_post['subject']) && isset($_post['message'])) {
   if(empty($_post['name']) || empty($_post['email']) || empty($_post['subject']) || empty($_post['message'])) {
      echo 'Lütfen boş bırakmayın!';
   } else {
      $name = strip_tags($_post['name']);
      $email = strip_tags($_post['email']);
      $subject = strip_tags($_post['subject']);
      $message = strip_tags($_post['message']);
      $icerik = 'Ad: ' . $name . '<br/>E-Posta: '. $email . '<br/>' . $message;
      mail('info@webtasarimcim.online', $subject, $icerik);
      echo 'Mesajınız Gönderildi! Teşekkürler.';
   }
} else {
   echo 'Lütfen Formu Kullanın!';
}

