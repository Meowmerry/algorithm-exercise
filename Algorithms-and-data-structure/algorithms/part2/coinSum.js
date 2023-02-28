/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `coinSum`:

// aka, there's only one way to make 1p. that's with a single 1p piece
coinSum(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
coinSum(2) === 2
*/
function coinSum() {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var sum = arguments[0] + 1;
    var len = coins.length;

    var table = new Array(sum);
    var base_cell = [];


    for (var i = 0; i !== len; i++) {
        base_cell.push(1);
    }

    table[0] = base_cell;

    for (var i = 1; i != sum; i++) {
        table[i] = new Array(len);

        for (var j = 0; j != len; j++) {
            var x = 0;
            var y = 0;

            if (i - coins[j] >= 0)
                x = table[i - coins[j]][j];

            if (j >= 1)
                y = table[i][j - 1];

            table[i][j] = x + y;
        }
    }

    return table[sum - 1][len - 1];
}