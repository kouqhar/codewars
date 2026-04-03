def capitalize_fibonacci(s):
    fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

    if len(s) == 0: return s;
    elif fibSequence[-1] >= len(s):
        return capitalizeFibonacciIndex(s, fibSequence);
    else:
        fibSeq = generateFibonacciSequence(s);
        return capitalizeFibonacciIndex(s, fibSeq);

def generateFibonacciSequence(s, sequence = [0, 1]):
  while sequence[len(sequence) - 1] < len(s):
    nextFib = sequence[len(sequence) - 1] + sequence[len(sequence) - 2];
    sequence.append(nextFib);
  return sequence;

def capitalizeFibonacciIndex(s = "", fibSequence = [0, 1]):
  strLength, newStr = len(s), "";
  for i in range(strLength):
    if i in fibSequence: newStr += s[i].upper();
    else: newStr += s[i].lower() or s[i];
  return newStr;


print(capitalize_fibonacci("hello world")); # "HELLo woRld".
print(capitalize_fibonacci("HELLO WORLD")); # "HELLo woRld".
print(capitalize_fibonacci("hello, world!")); # "HELLo, wOrld!".
print(
  capitalize_fibonacci("The quick brown fox jumped over the lazy dog."),
); # "THE qUicK broWn fox jUmped over thE lazy dog.".
print(
  capitalize_fibonacci(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.",
  ),
); # "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.".
