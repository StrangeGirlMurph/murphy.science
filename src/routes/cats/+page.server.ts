import {readFileSync} from 'fs';

export async function load() {
    const raw = readFileSync('static/infinite-cat-supply.json', "utf-8");
    const data = JSON.parse(raw);
    return data[Math.floor(Math.random()*data.length)];
}