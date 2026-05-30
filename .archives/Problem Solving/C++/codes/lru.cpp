#include <bits/stdc++.h>

using namespace std;

class LRUcache
{
public:
  class Node
  {
  public:
    int key, val;
    Node *next, *prev;
    Node(int _key, int _val)
    {
      key = _key;
      val = _val;
    }
  };

  Node *head = new Node(-1, -1);
  Node *tail = new Node(-1, -1);
  int cap;
  unordered_map<int, Node *> m;

  LRUcache(int capacity)
  {
    cap = capacity;
    head->next = tail;
    tail->prev = head;
  }

  void addNode(Node *newnode)
  {
    Node *temp = head->next;
    newnode->next = temp;
    newnode->prev = head;
    head->next = newnode;
    temp->prev = newnode;
  }

  void deleteNode(Node *delnode)
  {
    Node *delPrev = delnode->prev;
    Node *delNext = delnode->next;
    delPrev->next = delNext;
    delNext->prev = delPrev;
  }

  int get(int _key)
  {
    if (m.find(_key) != m.end())
    {
      Node *resnode = m[_key];
      int res = resnode->val;
      m.erase(_key);
      deleteNode(resnode);
      addNode(resnode);
      m[_key] = head->next;
      return res;
    }

    return -1;
  }

  void put(int _key, int _value)
  {
    if (m.find(_key) != m.end())
    {
      Node *delnode = m[_key];
      m.erase(_key);
      deleteNode(delnode);
    }
    if (m.size() == cap)
    {
      m.erase(tail->prev->key);
      deleteNode(tail->prev);
    }
    Node *newNode = new Node(_key, _value);
    addNode(newNode);
    m[_key] = head->next;
  }
};

int main()
{
  LRUcache lru(3);
  lru.put(1, 13);
  lru.put(2, 14);
  lru.put(3, 15);
  cout << lru.get(2) << endl;
  lru.put(4, 18);
  lru.put(5, 10);
  cout << lru.get(5) << endl;
  cout << lru.get(3) << endl;
}