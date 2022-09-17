export default function countItems(items, newItem) {
	const trigger = items.filter((item) => item.id === newItem.id).length;
	if (trigger) {
		return items.map((item) =>
			item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item
		);
	}
	return [...items, { ...newItem, amount: 1 }];
}
