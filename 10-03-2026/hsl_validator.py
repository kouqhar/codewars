import re

def is_valid_hsl(hsl):
    
    hslRegex = r"^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)\s*;?$";
    match = re.findall(hslRegex, hsl, re.IGNORECASE);

    if not match:
        return False;

    h, s, l = int(match[0][0]), int(match[0][1]), int(match[0][2]);

    if h < 0 or h > 360 or s < 0 or s > 100 or l < 0 or l > 100:
        return False;

    return True;

print(is_valid_hsl("hsl(240, 50%, 50%)")); # true.
print(is_valid_hsl("hsl( 200 , 50% , 75% )")); # true.
print(is_valid_hsl("hsl(99,60%,80%);")); # true.
print(is_valid_hsl("hsl(0, 0%, 0%) ;")); # true.
print(is_valid_hsl("hsl(  10  ,  20%   ,  30%   )    ;")); # true.
print(is_valid_hsl("hsl(361, 50%, 80%)")); # false.
print(is_valid_hsl("hsl(300, 101%, 70%)")); # false.
print(is_valid_hsl("hsl(200, 55%, 75)")); # false.
print(is_valid_hsl("hsl (80, 20%, 10%)")); # false.
