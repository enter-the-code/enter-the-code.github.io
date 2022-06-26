---
title: 2513번 통학버스 문제
date: 2022-06-24
tags: [Problem sloving]
social_image: '/media/rocket.jpg'
description: 소스코드와 해설입니다.
---

```c++
#include <iostream>
#include <vector>
#include<string.h>
#include<queue>
#include <string>
#include<stack>
#include<cmath>
#include <map>
#include<algorithm>
#include <fstream>
using namespace std;
struct member {
	int first;
	int second;
	int third;
};
typedef struct member member;
int N, S, K;
int bus_member;
vector<member> student1;
vector<member> student2;
int result;
bool compare(member a, member b) {

	return a.third < b.third;
}
int calculate(vector<member> student1) {
	int result=0;
	int pos = 0;
	int can_take = K;
	while (!student1.empty())
	{
		int a = student1.back().second;
		int b = student1.back().third;
		if (a > can_take)
		{
			student1.back().second -= can_take;
			if (pos < b)
			{
				pos = b;
			}
			can_take = 0;
		}
		else if (a == can_take) {
			student1.pop_back();
			if (pos < b)
			{
				pos = b;
			}
			can_take = 0;
		}
		else {
			can_take -= a;
			student1.pop_back();
			if (pos<b)
			{
				pos = b;
			}
		}
		if (can_take==0||student1.empty())
		{
			result += 2 * pos;
			pos = 0;
			can_take = K;
		}
	}
	return result;
}
int main() {
	cin >> N >> K >> S;
	for (int i = 0; i < N; i++)
	{
		int a, b;
		cin >> a >> b;
		int c = abs(S - a);
		if (S>a)
		{
			student1.push_back({ a,b,c });
		}
		else {
			student2.push_back({ a,b,c });
		}
		
	}
	sort(student1.begin(), student1.end(), compare);
	sort(student2.begin(), student2.end(), compare);
	int a = calculate(student1) + calculate(student2);
	cout << a << "\n";
	return 0;
}
```