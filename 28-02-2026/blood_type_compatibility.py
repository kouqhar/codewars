def can_donate(donor, recipient):
    donor_letter = donor[:-1]
    recipient_letter = recipient[:-1]

    donor_rh = donor[-1]
    recipient_rh = recipient[-1]

    letter_rule = {
        "O": ["A", "B", "AB", "O"], 
        "A": ["A","AB"],
        "B": ["B","AB"],
        "AB": ["AB"]}
    
    rh_rule = {
        "-": ["-","+"],
        "+": ["+"]}

    return (recipient_letter in letter_rule [donor_letter] and (recipient_rh in rh_rule[donor_rh]))

print(can_donate("A+", "AB+")) # True
print(can_donate("O+", "A-"))  # False
print(can_donate("O-", "AB-"))  # True
print(can_donate("B+", "B+"))  # True
