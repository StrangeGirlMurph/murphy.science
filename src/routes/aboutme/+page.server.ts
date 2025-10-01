import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		birthday: scrambleAge()
	};
}

function scrambleAge(): string {
	const birthdayStr = env.BIRTHDAY || '2003-01-01';

	const birthDate = new Date(birthdayStr);
	const today = new Date();
	const age = (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

	// Max offset of up to 2 months
	const randomMaxOffset = (Math.random() * 2) / 12;
	// Random offset between -maxOffset and +maxOffset
	const randomOffset = (Math.random() - 0.5) * 2 * randomMaxOffset;
	const scrambledAge = age + randomOffset;

	return `${scrambledAge.toFixed(6)} ± ${randomMaxOffset.toFixed(6)} years`;
}
