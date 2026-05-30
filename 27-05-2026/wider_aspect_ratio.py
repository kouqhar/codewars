def get_wider_aspect_ratio(a, b):
    a_width, a_height = map(int, a.split("x"))
    b_width, b_height = map(int, b.split("x"))
    aDiv, bDiv = a_width / a_height, b_width / b_height;

    aspectRatio = RATIOS(a_width, a_height);
    if bDiv > aDiv:
        aspectRatio = RATIOS(b_width, b_height);

    aspectRatioMod = [aspectRatio[0], aspectRatio[1]];

    while aspectRatioMod[-1] > 0:
        prevMod, curMod = aspectRatioMod[-2:]
        aspectRatioMod.append(prevMod % curMod);

    gcd = aspectRatioMod[-2];
    finalAspectRatio = map(lambda dim: str(dim // gcd), aspectRatio[2]);

    return  ":".join(finalAspectRatio);

def RATIOS(w, h):
    return [max(w, h), min(w, h), [w, h]];


print(get_wider_aspect_ratio("1920x1080", "800x600")); # "16:9".
print(get_wider_aspect_ratio("1080x1350", "2048x1536")); # "4:3".
print(get_wider_aspect_ratio("640x480", "2440x1220")); # "2:1".
print(get_wider_aspect_ratio("360x640", "1080x1920")); # "9:16".
print(get_wider_aspect_ratio("3440x1440", "2048x858")); # "43:18".
print(get_wider_aspect_ratio("12345x61234", "12534x51234")); # "2089:8539".
