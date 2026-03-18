import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		birthday: scrambleAge()
	};
}

function scrambleAge(): string {
	const birthdayStr = env.BIRTHDAY!;
	const birthDate = new Date(birthdayStr);
	const today = new Date();
	
	const middleOfTheYear = new Date("2003-07-01")
	
	const age = (today.getTime() - middleOfTheYear.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

	const baseUncertainty = 2/12 // My birthday is within +- 2 months of the middle of the year

	// Now its just scrambling for funsies to show changing decimal places. 
	// The randomness can easily eliminated just by sampling.
	const fiveDaysInYears = 5/365.25

	const offset = (Math.random() - 0.5) * 2 * fiveDaysInYears // Scrambled by at most five days in both directions
	const scrambledAge = age + offset; 
	const uncertainty = baseUncertainty + Math.abs(offset)

	return `${scrambledAge.toFixed(6)} ± ${uncertainty.toFixed(6)} years`;
}
