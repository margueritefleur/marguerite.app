import { fail } from '@sveltejs/kit';
import vine, { errors } from '@vinejs/vine';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

const schema = vine.object({
	name: vine.string().minLength(3).maxLength(40),
	email: vine.string().email(),
	description: vine.string().minLength(8)
});

export const actions = {
	contact: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			// VINE
			const validator = vine.compile(schema);
			const output = await validator.validate(data);

			// RESEND
			const { data: rData, error: rError } = await resend.emails.send({
				from: 'Acme <onboarding@resend.dev>',
				to: ['margueritefleur@proton.me'],
				subject: `New Marguerite Contact From: ${output.name}`,
				html: `<strong>Name:</strong> ${output.name}<br><strong>Email:</strong> ${output.email}<br><strong>Description:</strong> ${output.description}`
			});

			if (rError) {
				return fail(400, { errors: 'IDK' });
			}

			// HTML STATUS (for the form)
			return { success: true };
		} catch (err) {
			if (err instanceof errors.E_VALIDATION_ERROR) {
				let errorsObj = {};
				err.messages.forEach((obj) => {
					errorsObj[obj.field] = obj;
				});

				return fail(400, { errors: errorsObj });
			}
		}
	}
};
