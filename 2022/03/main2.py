import string

fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

i = 0
score = 0

lower_score = list(range(1, 26))
lower_alpha = list(string.ascii_lowercase)

upper_score = list(range(27,52))
upper_alpha = list(string.ascii_uppercase)

for line in Lines:
    print(i)
    if i > 2:
        i = 0

    if i == 0:
        s1 = set(line)

    elif i == 1:
        s2 = set(line)

    elif i == 2:
        s3 = set(line)

        same = ''.join(sorted(s1.intersection(s2)))
        same2 = ''.join(sorted(s3.intersection(same)))

        print(same)
        print(same2)

        same2 = same2.strip()

        if same2.islower():
            index = lower_alpha.index(same2)

            score += index+1
        else:
            index = upper_alpha.index(same2)

            score += index+27
    i +=1

print(score)