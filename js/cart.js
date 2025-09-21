// document.addEventListener('DOMContentLoaded', () => {
//     const cartContainer = document.getElementById('cart-container');
//     const cartTotalContainer = document.getElementById('cart-total');
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const updateCartCount = () => {
//         const cartCount = document.getElementById('cart-count');
//         if (cartCount) {
//             cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
//         }
//     };

//     const displayCart = () => {
//         if (!cartContainer) return;
//         cartContainer.innerHTML = '';
        
//         if (cart.length === 0) {
//             cartContainer.innerHTML = '<p class="text-center">سلتك فارغة حالياً.</p>';
//             cartTotalContainer.innerHTML = '';
//             return;
//         }

//         const table = `
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>المنتج</th>
//                         <th>السعر</th>
//                         <th>الكمية</th>
//                         <th>الإجمالي</th>
//                         <th>إجراء</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${cart.map(item => `
//                         <tr>
//                             <td>${item.name}</td>
//                             <td>${item.price} ريال</td>
//                             <td>${item.quantity}</td>
//                             <td>${item.price * item.quantity} ريال</td>
//                             <td><button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id}">إزالة</button></td>
//                         </tr>
//                     `).join('')}
//                 </tbody>
//             </table>
//         `;
//         cartContainer.innerHTML = table;
        
//         const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//         cartTotalContainer.innerHTML = `<strong>الإجمالي الكلي: ${total} ريال</strong>`;
//     };

//     const removeFromCart = (productId) => {
//         cart = cart.filter(item => item.id !== productId);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         displayCart();
//         updateCartCount();
//     };

//     if (cartContainer) {
//         cartContainer.addEventListener('click', (event) => {
//             if (event.target.classList.contains('remove-from-cart')) {
//                 const productId = parseInt(event.target.getAttribute('data-id'));
//                 removeFromCart(productId);
//             }
//         });
//     }

//     displayCart();
//     updateCartCount();
// });