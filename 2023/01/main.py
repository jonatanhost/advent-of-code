import re


fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

help_dict = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'zero': '0'
}

codes = []
sum = 0


def extract_numbers(input_string):
    """
    Extracts and returns numbers (both in numeral and word form) from a given string in their original order.
    """

    # Dictionary to map number words to their numerical equivalents
    number_words = {
        "one": "1", 
        "two": "2", 
        "three": "3", 
        "four": "4", 
        "five": "5",
        "six": "6", 
        "seven": "7", 
        "eight": "8", 
        "nine": "9"
    }

    # Regular expression to match number words
    number_word_regex = "|".join(number_words.keys())

    # Extracting numbers (numerals and words)
    numbers = re.findall(rf'\d+|{number_word_regex}', input_string, re.IGNORECASE)

    # Replace number words with their numerical equivalents
    separated_numbers = []
    for number in numbers:
        number = number_words.get(number.lower(), number)
        separated_numbers.extend([digit for digit in number])

    return separated_numbers


for line in Lines:

    filtered = extract_numbers(line)

    if len(filtered) == 1:
        filtered = int(str(filtered[0]) + str(filtered[0]))
        codes.append(filtered)
        sum += filtered
    else:
        filtered = int(str(filtered[0]) + str(filtered[-1]))
        codes.append(filtered)
        sum += filtered


print(codes)
print("SUM: ", sum)