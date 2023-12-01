import re

fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

codes = []
sum = 0

number_words = [
    ("one", "o1e"), 
    ("two", "t2o"), 
    ("three", "t3e"), 
    ("four", "f4r"), 
    ("five", "f5e"),
    ("six", "s6x"), 
    ("seven", "s7n"), 
    ("eight", "e8t"), 
    ("nine", "n9e"), 
]


for line in Lines:


    for p in number_words:
        line = line.replace(*p)
    print(line)

    filtered = [int(i) for i in line if i.isdigit()]
    print(filtered)

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