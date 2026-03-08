def smallest_gap(s):
    last_seen, min_gap, result = {}, len(s) + 1, ""

    for current_index, char in enumerate(s):
        if char in last_seen:
            prev_index = last_seen[char]
            gap_len = current_index - prev_index - 1

            if gap_len < min_gap:
                min_gap, result = gap_len, s[prev_index + 1 : current_index]
                
        last_seen[char] = current_index

    return result

print(smallest_gap("ABCDAC"))  # Output: "DA"
print(smallest_gap("racecar"))  # Output: "e"
print(smallest_gap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4"))  # Output: "#q6e&rkf(p"
print(smallest_gap("Hello World"))  # Output: ""
print(smallest_gap("The quick brown fox jumps over the lazy dog."))  # Output: "fox"