import data from "../../../static/infinite-cat-supply.json";

export async function load() {
    const cats = data as any[];
    return cats[Math.floor(Math.random()*cats.length)];
}