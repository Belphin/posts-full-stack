export default function countOrders(orders) {
	return orders.reduce((sum, order) => {
		return (sum += order.amount);
	}, 0);
}
