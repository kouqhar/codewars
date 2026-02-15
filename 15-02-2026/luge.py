def get_fastest_speed(times):
    result = [0, "segment 0"]
    meters = [320, 280, 350, 300, 250]

    for i in range(len(times)):
        calculation = round(meters[i] / times[i], 2)
        if calculation > result[0]:
            result = [calculation, i + 1]

    return f"The luger's fastest speed was {result[0]} m/s on segment {result[1]}."

print(get_fastest_speed([9.523, 8.234, 10.012, 9.001, 7.128]))
print(get_fastest_speed([9.381, 7.417, 9.912, 8.815, 7.284]))
print(get_fastest_speed([8.204, 7.230, 9.673, 7.645, 6.508]))