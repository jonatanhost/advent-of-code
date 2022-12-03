import string

fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

score = 0

lower_score = list(range(1, 26))
lower_alpha = list(string.ascii_lowercase)

upper_score = list(range(27,52))
upper_alpha = list(string.ascii_uppercase)

for line in Lines:
    n = len(line)

    s1 = set(line[slice(0,n//2)])
    s2 = set(line[slice(n//2,n)])

    same = ''.join(sorted(s1.intersection(s2)))
    print(same)

    if same.islower():
        index = lower_alpha.index(same)

        print(index)
      #  print("Score: "+str(lower_score[index]))

        score += index+1
    else:
        index = upper_alpha.index(same)
        print(index)
       # print("Score: "+str(upper_score[index]))

        score += index+27
    print("-------------------------")

print(score)