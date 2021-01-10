import csv
import sys
from datetime import datetime

# define our country lookup variable - hardcoding for now but will be the output of what the user selects
country_lookup = 'Aruba'

# read data from STDIN and split on each newline
data = sys.stdin.read().splitlines()

# use python's csv library to create a csv reader and a writer
reader = csv.DictReader(data)
writer = csv.DictWriter(sys.stdout, fieldnames=reader.fieldnames)

# write the header (first line of the csv) - remove hash if we want to add the headers back in
#writer.writeheader()

#loop through reader, add to this array "rows" (as we need to traverse reader more than once)
rows = []
for row in reader:
    rows.append(row)

#this gets the date in each row
most_recent_rows = []
most_recent_date = datetime.strptime("2020-01-01", "%Y-%m-%d")

for row in rows:
    row_date_string = row['Date'] #date format is 20200101
    row_date = datetime.strptime(row_date_string, "%Y%m%d")
    if row_date > most_recent_date:  #if it is greater than 1/1/2020, loops through and updates
        most_recent_date = row_date

# loop through the rows in the original csv to filter for country and the latest date data is available for
for row in rows:
    # filter rows
    row_date_string = row['Date'] #date format is 20200101
    row_date = datetime.strptime(row_date_string, "%Y%m%d")
    if row['CountryName'] == country_lookup and row_date == most_recent_date:
        # write rows that match above filter
        writer.writerow(row)