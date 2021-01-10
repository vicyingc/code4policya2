#!/usr/bin/env python3

import csv
import sys
#potentially dont need this
#from datetime import datetime

# define our country lookup variable - hardcoding for now but will be the output of what the user selects
country_lookup = 'United States'

# read data from STDIN and split on each newline
data = sys.stdin.read().splitlines()

# use python's csv library to create a csv reader and a writer
reader = csv.DictReader(data)
writer = csv.DictWriter(sys.stdout, fieldnames=reader.fieldnames)

# write the header (first line of the csv) - remove hash if we want to add the headers back in
writer.writeheader()

country_dictionary = {}
for row in reader:
    for column, value in row.items():  
        #country_dictionary.setdefault(column, []).append(value)
        country_dictionary[value] = 

print(country_dictionary)