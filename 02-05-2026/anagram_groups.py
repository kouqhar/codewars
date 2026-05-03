def group_anagrams(words):
    anagram_dict = {}
    
    for word in words:
        sorted_word = ''.join(sorted(word))
        if sorted_word in anagram_dict:
            anagram_dict[sorted_word].append(word)
        else:
            anagram_dict[sorted_word] = [word]

    return list(anagram_dict.values())

print(group_anagrams(["listen", "silent", "hello", "enlist", "world"])) # [["listen", "silent", "enlist"], ["hello"], ["world"]].
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) # [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]].
print(group_anagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"])) # [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]].
print(group_anagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"])) # [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]].