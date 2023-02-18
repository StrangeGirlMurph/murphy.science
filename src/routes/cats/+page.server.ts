import {readFileSync} from 'fs';
import path from 'path';

export async function load() {
    const raw = readFileSync(path.join(process.cwd(), '/static/infinite-cat-supply.json'), "utf-8");
    console.log(raw);
    const data = JSON.parse(raw);
    console.log(data);
    return data[Math.floor(Math.random()*data.length)];
}