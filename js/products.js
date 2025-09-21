// // تعريف المنتجات
// const products = [
//     { id: 1, name: "لابتوب حديث", price: 4500, image: "images/product1.jpg", category: "electronics" },
//     { id: 2, name: "سماعة رأس", price: 300, image: "images/product2.jpg", category: "electronics" },
//     { id: 3, name: "كتاب برمجة", price: 150, image: "images/product3.jpg", category: "books" },
//     { id: 4, name: "ساعة ذكية", price: 800, image: "images/product4.jpg", category: "accessories" },
//     { id: 5, name: "كاميرا احترافية", price: 2500, image: "images/product5.jpg", category: "electronics" },
//     { id: 6, name: "حقيبة ظهر", price: 200, image: "images/product6.jpg", category: "accessories" }
// ];

// // حفظ المنتجات في LocalStorage إذا لم تكن موجودة بالفعل
// function initializeProducts() {
//     if (!localStorage.getItem('products')) {
//         localStorage.setItem('products', JSON.stringify(products));
//     }
// }

// // استدعاء الدالة عند تحميل السكربت
// initializeProducts();