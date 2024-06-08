export const load = async ({ locals }) => {
	const records = await locals.pb.collection('services').getFullList({
		sort: '+created'
	});

	console.log(records);

	return { records };
};
