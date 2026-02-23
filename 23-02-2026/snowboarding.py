def get_landing_stance(start_stance, rotation):
  
  if (abs(rotation) // 180) % 2 == 0:
    return start_stance
  else:
    return "Goofy" if start_stance == "Regular" else "Regular"
  
print(get_landing_stance("Regular", 90)); # Regular
print(get_landing_stance("Regular", 180)); # Goofy
print(get_landing_stance("Goofy", -270)); # Regular
print(get_landing_stance("Regular", 2340)); # Goofy
print(get_landing_stance("Goofy", 2160)); # Goofy
print(get_landing_stance("Goofy", -540)); # Regular