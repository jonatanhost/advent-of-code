
fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

score = 0

for line in Lines:

    line = line.strip()
    line = line.replace('-',',')
    x = line.split(",")

    x = [int(item) for item in x]

    print(x)

    if x[0] >= x[2] and x[1] <= x[3]:
        score += 1

    elif x[2] >= x[0] and x[3] <= x[1]:
        score += 1

print("Score: " + str(score))