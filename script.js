// // Giriş yoxlaması və səhifə açılma
// document.getElementById('login-form').addEventListener('submit', function (e) {
//   e.preventDefault(); // Formanın təkrar göndərilməsini əngəlləyirik

//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Sadə login yoxlaması
//   if (username === 'admin' && password === '12345') {
//       // Əgər doğru daxil edildisə, login səhifəsini gizlədirik və əsas səhifəni göstəririk
//       document.querySelector('.login-container').style.display = 'none';
//       document.querySelector('.container').style.display = 'block';
//   } else {
//       alert('İstifadəçi adı və ya şifrə yanlışdır.');
//   }
// });


// document.querySelectorAll('.dropdown-btn').forEach(button => {
//   button.addEventListener('click', () => {
//     const content = button.nextElementSibling;
    
//     // Toggle visibility of the dropdown content with smooth transition
//     if (content.style.display === 'block') {
//       content.style.display = 'none';
//       content.style.opacity = '0';
//     } else {
//       content.style.display = 'block';
//       content.style.opacity = '1';
//     }
//   });
// });


// Giriş yoxlaması və səhifə açılma
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Formanın təkrar göndərilməsini əngəlləyirik

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Sadə login yoxlaması
  if (username === 'admin' && password === '12345') {
      // Əgər doğru daxil edildisə, login məlumatlarını localStorage-a yazırıq
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', username);

      // Login səhifəsini gizlət və əsas səhifəni göstər
      document.querySelector('.login-container').style.display = 'none';
      document.querySelector('.container').style.display = 'block';
  } else {
      alert('İstifadəçi adı və ya şifrə yanlışdır.');
  }
});

// Səhifə yüklənərkən istifadəçinin login olub-olmadığını yoxlayırıq
window.onload = function() {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    // Əgər login olunubsa, login səhifəsini gizlət və əsas səhifəni göstər
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
  } else {
    // Əgər login olunmayıbsa, login səhifəsini göstər
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
  }
}

// Dropdown menyusunun açılması və bağlanması
document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    
    // Dropdown məzmununun görünürlüğünü dəyişirik
    if (content.style.display === 'block') {
      content.style.display = 'none';
      content.style.opacity = '0';
    } else {
      content.style.display = 'block';
      content.style.opacity = '1';
    }
  });
});