fileObject = open("input.txt", "r")
Lines = fileObject.readlines()


score = 0

for line in Lines:
    x = line.split(" ")

    if "X" in x[1]:
        score += 0

        if "A" in x[0]:
            score += 3
        elif "B" in x[0]:
            score += 1
        elif "C" in x[0]:
            score += 2

    elif "Y" in x[1]:
        score += 3
        
        if "A" in x[0]:
            score += 1
        elif "B" in x[0]:
            score += 2
        elif "C" in x[0]:
            score += 3

    elif "Z" in x[1]:
        score += 6
        
        if "A" in x[0]:
            score += 2
        elif "B" in x[0]:
            score += 3
        elif "C" in x[0]:
            score += 1

print(score)