fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

elves = []
calories = 0

for line in Lines:

    if line.strip():
        calories += int(line)
    else:
        elves.append(calories)
        calories = 0

count = 0
top_calories = 0

while count < 3:
    most_calories = max(elves)

    for elve in elves:
        if elve == most_calories:
            top_calories += elve
            print(elve)
            elves.remove(elve) 
    
    count += 1

print(top_calories)