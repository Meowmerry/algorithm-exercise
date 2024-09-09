/*
JavaScript/TypeScript: Mutual Connections

In the realm of social media, analyzing user connections can yield valuable insights, 
especially for the features of friend suggestions and group recommendations. 
Given a list of users along with their connections and two usernames, your task is to identify mutual connections that are shared between these users.

The function should accept three arguments. The first argument is a list of comma-separated strings, each containing a user followed by their connections. 
The second and third arguments are two distinct usernames. The function should return a list of usernames representing common connections between the specified users. This list should be sorted alphabetically before being returned. If there are no common users, the function should return an empty list. The template handles the printing of the output.

Example
For example, if the input object is
Alice, Bob, Charlie, Gabe
Bob, Alice, Eve
Charlie, Alice, Fiona, Gabe
and the two usernames provided are "Alice" and "Charlie", then the function should return the common connections between these two users, which is "Gabe".


Function Description
Complete the function findConnections in the editor below.

findConnections has the following parameter(s):

string users[n]: a list of users and their connections string username?: the name of the first user to analyze string username2: the name of the second user to analyze

Returns
connections[n]: A list of strings denoting the mutual connections found between the two given users. If no connection is found, return an empty string.


Constraints
Maximum number of user objects s 1,000
Maximum number of connections per user s 100
1s length of user[n]s 10
1s length of user[n][] ≤ 10

*/
function findConnections(users, username1, username2) {
    const connections = new Map();

    users.forEach(element => {
        const [user, ...connection] = element.split(',');
        connections.set(user, connection);

    });
    console.log({ connections });

    const connection1 = connections.get(username1) || [];
    const connection2 = connections.get(username2) || [];

    const mutualConnection = connection1.filter((connection) => connection2.includes(connection));

    return mutualConnection.sort();
}

// Example usage:
const users = [
    "Alice,Bob,Charlie,Gabe",
    "Bob,Alice,Eve",
    "Charlie,Alice,Fiona,Gabe"
];
const username1 = "Alice";
const username2 = "Charlie";

// console.log(findConnections(users, username1, username2)); // Output: ["Gabe"]
const users1 = [
    "Fiona,Alice,Bob,Charlie,Gabe",
    "Bob,Alice,Eve,Fiona,Gabe",
    "Charlie,Alice,Fiona,Gabe"
];
const username11 = "Fiona";
const username22 = "Charlie";

console.log(findConnections(users1, username11, username22)); // Output: [ 'Alice', 'Gabe' ]