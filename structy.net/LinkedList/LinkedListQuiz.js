/*
Q: What two preperties are typically stored in the nodes of single linked-list?
A: value and next. 
The value is the data being stored 
and next is a reference to the next sequential node in the list.

Q: What term is commonly used to describe the 'first node' of a linked list?
A: Head

Q: What term is commonly used to describe the 'last node' of a linked list?
A: Tail

Q: What is the 'dummy head' pattern for the linked lists?
A: The 'dummy head' pattern is where we sue a fake node to act as the head of the linked list.
The dummy node is used to simplity edge cases such as inserting the first node into 
an 'empty' linked list.

Q: What might the expression 'current.next.val' be unsafe?
A: If current is the tail node, the expression throws and error
becase current.next is null and null does not have a val property

Q: What is the optimal complexity we can acchieve for searching for a target value
in a standard, singly linked-list?
A: O(n) time and O(1) space if we do it iteratively.
The recursive solution would be less optimal at O(n) time and O(n) space.

*/