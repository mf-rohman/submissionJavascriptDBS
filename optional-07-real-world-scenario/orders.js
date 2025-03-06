// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const customerId = generateUniqueId();
  const totalOrders = calculateTotalRevenue();
  const item = orders.push(customerId, customerName, [...items], totalOrders);
  // return {
  //   'id: customerId,
  //   customerName: customerName,
  //   items: items,
  //   totalPrice: totalOrders,
  // 'status': item.status,
  // };
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const priceTotal = orders.reduce((total, price) => total + price.price, 0);
  return priceTotal;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
