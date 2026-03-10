import re
def get_element_size(window_size, element_vw, element_vh):
    
    [windowWidth, windowHeight], elementVw, elementVh = window_size.split(" x "),int(''.join(re.findall(r'\d', element_vw))), int(''.join(re.findall(r'\d', element_vh)))
    
    elementWidth, elementHeight = (elementVw / 100) * int(windowWidth), (elementVh / 100) * int(windowHeight)

    return f"{int(elementWidth)} x {int(elementHeight)}"

print(get_element_size("1200 x 800", "50vw", "50vh")) # "600 x 400"
print(get_element_size("320 x 480", "25vw", "50vh")) # "80 x 240"
print(get_element_size("1000 x 500", "7vw", "3vh")) # "70 x 15"
print(get_element_size("1920 x 1080", "95vw", "100vh")) # "1824 x 1080"
print(get_element_size("1200 x 800", "0vw", "0vh")) # "0 x 0"
print(get_element_size("1440 x 900", "100vw", "114vh")) # "1440 x 1026"
