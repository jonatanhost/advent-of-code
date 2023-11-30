
fileObject = open("input.txt", "r")
Lines = fileObject.readlines()

score = 0

stack_1 = ['N','R','G','P']
stack_2 = ['J', 'T', 'B', 'L', 'F', 'G', 'D', 'C']
stack_3 = ['M', 'S', 'V']
stack_4 = ['L', 'S', 'R', 'C', 'Z', 'P']
stack_5 = ['P', 'S', 'L', 'V', 'C', 'W', 'D', 'Q']
stack_6 = ['C', 'T', 'N', 'W', 'D', 'M', 'S']
stack_7 = ['H', 'D', 'G', 'W', 'P']
stack_8 = ['Z', 'L', 'P', 'H', 'S', 'C', 'M', 'V']
stack_9 = ['R', 'P', 'F', 'L', 'W', 'G', 'Z']

for line in Lines:
    #strip away all letters
    line = line.strip()
    line = line.split(" ")

    steps = [item for item in line if item.isdigit()]    
    steps = list(map(int, steps))
 
    i = 0

    while i < steps[0]:

        rBox = globals()['stack_%s' % steps[1]].pop(  len(globals()['stack_%s' % steps[1]]) -(steps[0]) +i )
        globals()['stack_%s' % steps[2]].append(rBox)

        i += 1
    
    print("Stack1: " + str(stack_1))
    print("Stack6: " + str(stack_6))

print(stack_1[-1])
print(stack_2[-1])
print(stack_3[-1])
print(stack_4[-1])
print(stack_5[-1])
print(stack_6[-1])
print(stack_7[-1])
print(stack_8[-1])
print(stack_9[-1])
