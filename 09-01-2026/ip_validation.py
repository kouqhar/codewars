import re
def is_valid_IP(s: str) -> bool:
    ipList = s.split(".")
    result = True
    
    if len(ipList) != 4:
        return False
    
    for i in ipList:
        ex = re.findall("\D", i)
        if len(ex) > 0 or i == "":
            result = False
            break
        else:
            if (len(i) > 1 and i[0] == "0") or (int(i) > 255 or int(i) < 0):
                result = False
                break
                
    return result