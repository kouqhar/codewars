def groundhog_day_prediction(appearance):
  if isinstance(appearance, bool):
    return "Looks like we'll have six more weeks of winter." if appearance else "It's going to be an early spring."
  
  return "No prediction this year."