// // 픽(Pick)타입
// // interface Product {
// //     id: number;
// //     name: string;
// //     price: number;
// //     brand: string;
// //     stock: number;
// // }

// // // 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//     //...
// }

// // // interface ProductDetil {
// // //     id: number;
// // //     name: string;
// // //     price: number;
// // // }

// // // 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// // type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
// // function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

// // }

// // 오밋(Omit)타입
// // interface Product {
// //     id: number;
// //     name: string;
// //     price: number;
// //     brand: string;
// //     stock: number;
// // }
// // type ShoppingItem = Omit<Product, 'brand' | 'stock'>

// // 파셜(Partial)타입
// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     brand: string;
//     stock: number;
// }

// // interface UpdateProduct {
// //     id?: number;
// //     name?: string;
// //     price?: number;
// //     brand?: string;
// //     stock?: number;
// // }

// type UpdateProduct = Partial<Product>
// // 3. 특정 상품 정보를 갱신(업데이트)하는 함수
// function updateProductItem(productItem: Partial<Product>) {

// }

// // 4. 유틸리티 타입 구현하기 - Partial
// interface UserProfile {
//     username: string;
//     email: string;
//     profilePhotoUrl: string;
// }
// // interface UserProfileUpdate{
// //     username?: string;
// //     email?: string;
// //     profilePhotoUrl?: string;
// // }

// // # 첫 번째 접근 방식
// // type UserProfileUpdate = {
// //     username?: UserProfile['username'];
// //     email?: UserProfile['email'];
// //     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// // }

// // # 두 번째 접근 방식
// // type UserProfileUpdate = {
// //     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// // }
// // type UserProfileKeys = keyof UserProfile

// // # 세 번째 접근 방식
// type UserProfileUpdate = {
//     [p in keyof UserProfile]?: UserProfile[p]
// }

// // # 네 번째 접근 방식
// type Subset<T> = {
//     [p in keyof T]?: T[p]
// }