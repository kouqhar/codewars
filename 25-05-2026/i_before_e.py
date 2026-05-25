import re

def i_before_e(sentence):

    str = re.sub(r"(?<!c)ei", "ie", sentence)
    return re.sub(r"cie", "cei", str)

print(i_before_e("beleive")); # "believe".
print(i_before_e("recieve")); # "receive".
print(i_before_e("we recieved a breif")); # "we received a brief".
print(
  i_before_e("she beleived the friendly niece could percieve the greif"),
); # "she believed the friendly niece could perceive the grief".
print(
  i_before_e(
    "we recieved relief after the theif gave us a breif piece of feirce deceit",
  ),
); # "we received relief after the thief gave us a brief piece of fierce deceit".
