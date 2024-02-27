function knightMoves(start, end) {
    const moves = [
        [1, 2], [-1, 2], [1, -2], [-1, -2],
        [2, 1], [-2, 1], [2, -1], [-2, -2]
    ];

    function isLegalMove(position) {
        const [x, y] = position;
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [[start]];

    const visited = new Set();
    visited.add(start.join(','));

    while(queue.length > 0) {
        const path = queue.shift();
        const currentPosition = path[path.length -1];

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            return {
                moves: path.length - 1,
                path,
            }
        }
        
        moves.forEach(([dx, dy]) => {
            const newPosition = [currentPosition[0] + dx, currentPosition[1] + dy];
            if (isLegalMove(newPosition) && !visited.has(newPosition.join(','))) {
                const newPath = path.concat([newPosition]);
                queue.push(newPath);
                visited.add(newPosition.join(','));
            }
        })
    }
    return null;
}

// add start and end arrays to knightMoves function below to test:
const result = knightMoves([3, 1], [7, 7]);
if (result) {
    console.log(`You made it in ${result.moves} moves! Here's your path:`);
    result.path.forEach(position => console.log(position));
} else {
    console.log("No valid path found.");
}