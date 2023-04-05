# ChatGPT to Markdown Chrome Extension

Easily copy the contents of a ChatGPT chat and past the markdown version of it wherever you'd like.

Or you can easily download the ChatGPT chat into a markdown file.

## Installation Instructions

1. Download the repository

1. Open Chrome and go to chrome://extensions/.

1. Enable "Developer mode" by toggling the switch in the top right corner.

1. Click "Load unpacked" and select the folder containing your extension files.

Your extension should now be installed, and you can use it by clicking the extension icon in the top right corner of Chrome.

## Prompt: Please show me an example of a bulleted list

Sure! Here's an example of a bulleted list:

Grocery list:

- Milk

- Eggs

- Bread

- Cheese

- Apples

- Carrots

- Chicken

In this example, the items are listed with bullet points, making them easier to read and separate from one another. The bullets also make it clear that each item is a separate entity in the list.

## Prompt: list Harry Potter's 5 favorite foods

Based on the Harry Potter books, here are five foods that Harry Potter is known to enjoy:

1. Pumpkin Pasties: These are a type of sweet pastry that are popular in the wizarding world. Harry and his friends often eat them on the Hogwarts Express.

1. Chocolate Frogs: Harry is a big fan of these chocolate treats that come with collectible cards featuring famous witches and wizards.

1. Treacle Tart: This is a dessert made with a shortcrust pastry base and a filling of golden syrup and breadcrumbs. Harry mentions enjoying it in the books.

1. Bertie Bott's Every Flavour Beans: These jelly beans come in a wide variety of flavors, some of them quite unusual (like earwax and vomit). Harry enjoys trying them out with his friends, although he sometimes gets unlucky with the flavors he gets.

1. Roast Beef: In the first book, Harry is thrilled to discover that the Hogwarts feast includes roast beef, which he says is one of his favorite foods.

## Prompt: please give me some python examples of a lambda function

Lambda functions in Python are small, anonymous functions that are created using the <code>lambda</code> keyword. They can take any number of arguments but can only have one expression. Here are a few examples:

1. Adding two numbers:

```python
add = lambda x, y: x + y
print(add(3, 5))  # Output: 8
```

1. Squaring a number:

```python
square = lambda x: x * x
print(square(4))  # Output: 16
```

1. Sorting a list of tuples based on the second element:

```python
data = [(1, 'one'), (3, 'three'), (2, 'two')]
sorted_data = sorted(data, key=lambda x: x[1])
print(sorted_data)  # Output: [(1, 'one'), (3, 'three'), (2, 'two')]
```

1. Filtering a list of even numbers:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4, 6, 8]
```

1. Mapping a list of numbers to their squares:

```python
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, numbers))
print(squares)  # Output: [1, 4, 9, 16, 25]
```

Keep in mind that lambda functions are limited in their functionality compared to regular functions defined with <code>def</code>. They are best used for simple operations or as arguments to functions like <code>map()</code>, <code>filter()</code>, and <code>sorted()</code>.

