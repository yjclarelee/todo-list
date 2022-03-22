# Todo List

## Functionality
- Create and Delete
- Strikethrough
- Data saved in localStorage

## Edge cases
- Prevent input when input string is null
- Prevent same input

## Concepts considered
- setState를 할 때 array나 object의 경우 복사본을 활용해야 하는데, map이나 filter와 같은 method들은 새로운 array를 만들기 때문에 spread operator를 쓸 필요가 없다.
- key의 경우 index를 그대로 활용하면 안되고 각 item에 고유한 key를 부여해주어야 한다.
