#include <bits/stdc++.h>

using namespace std;

void swap(int &a, int &b)
{
  int temp = a;
  a = b;
  b = temp;
}

void fun(int arr[], int size)
{
  int low = 0, mid = 0, high = size - 1;

  int i=0;

  while (i <= high)
  {
    if (arr[i] == 0)
    {
      swap(arr[i], arr[low]);
      low++;
      i++;
    }
    else if (arr[i] == 2)
    {
      swap(arr[i], arr[high]);
      high--;
    }
    else{
      i++;
    }
  }

  cout << "low" << low << " mid" << mid << " high" << high << endl;

  for (int i = 0; i < size; i++)
  {
    cout << arr[i] << " ";
  }
}

int main()
{
  int arr[] = {1,2,0, 0, 1, 2, 0, 1, 2};
  int size = sizeof(arr) / sizeof(int);
  fun(arr, size);
}
