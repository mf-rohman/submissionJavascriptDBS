// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const customerId = generateUniqueId();
  const totalOrders = calculateTotalRevenue(items);
  
  const newOrder = {
    id: customerId,
    customerName: customerName,
    items: items.map(item => ({ ...item})),
    totalPrice: totalOrders,
    status: 'Menunggu',
  }
  orders.push(newOrder);
  return newOrder;
  
}

function displayOrders() {
  console.log(JSON.stringify(orders, null, 2));
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const index = orders.findIndex(order => order.id === orderId);
  if (index !== -1) {
    orders[index].status = status;
  }
  return true;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue(items) {
  const priceTotal = items.reduce((total, item) => {
    return total + item.price;
  }, 0);
  return priceTotal;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
  return true;
}

export {
  orders,
  addOrder,
  displayOrders,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
