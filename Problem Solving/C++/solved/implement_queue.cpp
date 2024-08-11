#include <bits/stdc++.h>

using namespace std;

class Queue
{
  int front = -1, rear = -1, size = 0, capacity;
  int *queue;

public:
  Queue(int cap)
  {
    capacity = cap;
    queue = new int[capacity];
  }

  ~Queue()
  {
    delete[] queue;
  }

  bool isFull()
  {
    if (size == capacity)
      return true;
    return false;
  }

  bool isEmpty()
  {
    if (size == 0)
      return true;
    return false;
  }

  void enqueue(int num)
  {
    if (isFull())
    {
      cout << "Queue is Full!" << endl;
    }
    else
    {
      rear = (rear + 1) % capacity;
      queue[rear] = num;
      if (front == -1)
      { // First element to enqueue
        front = rear;
      }
      size++;
    }
  }

  void dequeue()
  {
    if (isEmpty())
    {
      cout << "Queue is Empty!" << endl;
    }
    else
    {
      cout << "Removed: " << queue[front] << endl;
      front = (front + 1) % capacity;
      if (isEmpty())
      { // Reset the queue when it becomes empty
        front = rear = -1;
      }
      size--;
    }
  }

  int get()
  {
    if (isEmpty())
    {
      cout << "Queue is Empty!" << endl;
      return -1;
    }
    else
    {
      return queue[front];
    }
  }

  void print()
  {
    if (isEmpty())
    {
      cout << "Queue is empty\n";
      return;
    }
    cout << "Queue: ";
    if (rear >= front)
    {
      // If rear has not wrapped around the front
      for (int i = front; i <= rear; i++)
      {
        cout << queue[i] << " ";
      }
    }
    else
    {
      // If rear has wrapped around
      for (int i = front; i < capacity; i++)
      {
        cout << queue[i] << " ";
      }
      for (int i = 0; i <= rear; i++)
      {
        cout << queue[i] << " ";
      }
    }
    cout << endl;
  }
};

int main()
{
  Queue q(10);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.dequeue();
  q.print();
}