#include <bits/stdc++.h>

using namespace std;

class Stack
{
	int size = 5, top = -1;
	int stack[5];

public:
	Stack(int capacity)
	{
		size = capacity;
	}

	bool isFull()
	{
		if (top == size - 1)
			return true;
		return false;
	}

	bool isEmpty()
	{
		if (top == -1)
			return true;
		return false;
	}

	void push(int num)
	{
		if (isFull())
		{
			cout << "Stack is Full!" << endl;
		}
		else
		{
			stack[++top] = num;
		}
	}

	int pop()
	{
		if (isEmpty())
		{
			cout << "Stack is Empty!" << endl;
		}
		else
		{
			return stack[top--];
		}
	}

	void print()
	{
		if (isEmpty())
		{
			cout << "Stack is Empty!" << endl;
		}
		else
		{
			for (int i = top; i >= 0; i--)
			{
				cout << "|" << stack[i] << "|" << endl;
			}
		}
	}
};

int main()
{
	Stack myStack(10);
	myStack.push(1);
	myStack.push(2);
	myStack.push(3);
	myStack.push(4);
	myStack.push(5);
	myStack.push(12);
	myStack.push(16);
	myStack.pop();
	myStack.pop();
	myStack.pop();
	myStack.pop();
	myStack.pop();
	myStack.pop();
	myStack.pop();
	myStack.print();
}