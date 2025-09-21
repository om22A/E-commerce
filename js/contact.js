// document.addEventListener('DOMContentLoaded', () => {
//     const contactForm = document.getElementById('contact-form');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', (event) => {
//             event.preventDefault(); // منع الإرسال التلقائي للفورم

//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const message = document.getElementById('message').value.trim();
//             const emailError = document.getElementById('email-error');
//             const formFeedback = document.getElementById('form-feedback');
            
//             let isValid = true;
            
//             // التحقق من الحقول
//             if (name === '' || email === '' || message === '') {
//                 isValid = false;
//                 formFeedback.innerHTML = `<div class="alert alert-danger">الرجاء ملء جميع الحقول.</div>`;
//             } else {
//                  formFeedback.innerHTML = '';
//             }

//             // التحقق من البريد الإلكتروني
//             if (!email.includes('@')) {
//                 isValid = false;
//                 emailError.classList.remove('d-none');
//             } else {
//                 emailError.classList.add('d-none');
//             }

//             if (isValid) {
//                 formFeedback.innerHTML = `<div class="alert alert-success">تم إرسال رسالتك بنجاح!</div>`;
//                 contactForm.reset(); // إفراغ الفورم بعد الإرسال
//             }
//         });
//     }
// });