export const GlobalComponent = {
  // Api Calling
  API_URL: 'https://api-node.themesbrand.website/',
  // API_URL : 'http://127.0.0.1:3000/',
  headerToken: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },

  // Auth Api
  AUTH_API: 'https://api-node.themesbrand.website/auth/',
  PHP_API:
    'http://localhost/cs-main/main/code/controllers/usuarioController.php',
  // AUTH_API:"http://127.0.0.1:3000/auth/",
  API: 'https://fakestoreapi.com',
  // Products Api
  product: 'apps/product',
  productDelete: 'apps/product/',

  // Orders Api
  order: 'apps/order',
  orderId: 'apps/order/',

  // Customers Api
  customer: 'apps/customer',
};
