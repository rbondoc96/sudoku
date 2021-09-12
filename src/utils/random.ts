export function getRandomInt(max): number {
    return Math.floor(Math.random() * max);
}

export function getRandomCoordinate(): number[] {
    let row = getRandomInt(9);
    let col = getRandomInt(9);

    return [row, col];
}