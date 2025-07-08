# Importing the modules
import file_utils
import string_utils
import math_utils


if __name__ == "__main__":
    # Math operations
    print("Addition:", math_utils.add(5, 3))
    print("Subtraction:", math_utils.subtract(10, 4))

    # String operations
    print("Uppercase:", string_utils.uppercase("hello"))
    print("Lowercase:", string_utils.lowercase("WORLD"))

    # File operations
    file_utils.write_file("sample.txt", "Hello, world!")
    print("File content:", file_utils.read_file("sample.txt"))
