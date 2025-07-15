# Lists (Ordered, Mutable, Allows Duplicates) 
fruits = ["apple", "banana", "cherry", "banana"]
fruits.append("toffee")
print("List:", fruits)

# Tuples (Ordered, Immutable, Allows Duplicates) Good 
coordinates = (10.0, 20.0, 30.0)
print("Tuple:", coordinates)

# Sets (Unordered, Unique Elements Only)
unique_numbers = {1, 2, 3, 2, 1}
unique_numbers.add("5")
print("Set:", unique_numbers)

# Dictionaries (Key-Value Pairs, Unordered, Fast Lookups)
person = {"name": "Alice", "age": 25, "city": "New York"}
person.update({'job':'toliet_cleaner'})
print("Dictionary:", person)
