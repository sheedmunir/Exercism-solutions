EXPECTED_BAKE_TIME = 40


def bake_time_remaining(x):
    """Raise a number to an arbitrary power.

    Parameters:
        number (int): The base number.
        power (int): The power to raise the base number to.
    
    Returns:
        int: The number raised to the specified power.
    
    Takes a number and raises it to the specified power, returning the result.

    """
    return EXPECTED_BAKE_TIME - x
  
  




def preparation_time_in_minutes(number_of_layers):
    """Raise a number to an arbitrary power.

    Parameters:
        number (int): The base number.
        power (int): The power to raise the base number to.
    
    Returns:
        int: The number raised to the specified power.
    
    Takes a number and raises it to the specified power, returning the result.

    """
    return number_of_layers * 2
    




def elapsed_time_in_minutes(number_of_layers,elapsed_bake_time):
    """calculate elapsed time.

    Keyword Arguments:
        number_of_layers (number): the number of layers
        elapsed_bake_time (number): the time that has elapsed during baking
        
    """
    return elapsed_bake_time + (number_of_layers*2)
    


