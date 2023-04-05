# ChatGPT to Markdown Chrome Extension

Easily copy the contents of a ChatGPT chat and past the markdown version of it wherever you'd like.

Or you can easily download the ChatGPT chat into a markdown file.

## Installation Instructions

1. Download the repository

1. Open Chrome and go to chrome://extensions/.

1. Enable "Developer mode" by toggling the switch in the top right corner.

1. Click "Load unpacked" and select the folder containing your extension files.

Your extension should now be installed, and you can use it by clicking the extension icon in the top right corner of Chrome.


## Prompt: please give me some python examples of a lambda function

Lambda functions in Python are small, anonymous functions that are created using the <code>lambda</code> keyword. They can take any number of arguments but can only have one expression. Here are a few examples:

1. Adding two numbers:

```python
add = lambda x, y: x + y
print(add(3, 5))  # Output: 8
```

2. Squaring a number:

```python
square = lambda x: x * x
print(square(4))  # Output: 16
```

3. Sorting a list of tuples based on the second element:

```python
data = [(1, 'one'), (3, 'three'), (2, 'two')]
sorted_data = sorted(data, key=lambda x: x[1])
print(sorted_data)  # Output: [(1, 'one'), (3, 'three'), (2, 'two')]
```

4. Filtering a list of even numbers:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4, 6, 8]
```

5. Mapping a list of numbers to their squares:

```python
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, numbers))
print(squares)  # Output: [1, 4, 9, 16, 25]
```

Keep in mind that lambda functions are limited in their functionality compared to regular functions defined with <code>def</code>. They are best used for simple operations or as arguments to functions like <code>map()</code>, <code>filter()</code>, and <code>sorted()</code>.

