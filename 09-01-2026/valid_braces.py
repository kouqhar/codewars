def valid_braces(string):
    openBraces = []
    closeBraces = []
    braces = {
        "(": ")", 
        "{": "}",
        "[": "]"
    }
    
    for i in range(len(string)):
        if string[i] in braces:
            openBraces.append(string[i])
        elif string[i] not in braces and len(openBraces) < 1:
            return False
        else:
            closeBraces.append(string[i])
            searchBrace = braces[openBraces[-1]] == string[i]
            if len(openBraces) > 0 and searchBrace:
                openBraces.pop()
                closeBraces.pop()
            else:
                break
    
    if(len(openBraces) > 0 or len(closeBraces) > 0):
        return False
    else:
        return True