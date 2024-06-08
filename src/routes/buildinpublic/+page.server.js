export const load = async ({ locals }) => {
	const transactions = await locals.pb.collection('transactions').getFullList({
		sort: '+created'
	});

	const earned = await locals.pb.collection('earned').getFullList({
		sort: '+created'
	});

	return { transactions, earned };
};
