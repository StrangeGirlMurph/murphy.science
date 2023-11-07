import { get } from "svelte/store";
import data from "../../../static/infinite-cat-supply.json";

export async function load() {
    return getCat();
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		return getCat();
	}
};

function getCat() {
    const cats = data as any[];
    return cats[Math.floor(Math.random()*cats.length)];
}