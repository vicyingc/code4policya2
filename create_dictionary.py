#!/usr/bin/env python3

import pandas as pd
df = pd.read_csv('OxCGRT_latest_onerowpercountry_01092021_0100.csv')
df.columns
#select only the 3 columns we need
df = df[['CountryName', 'C5_Close public transport', 'C8_International travel controls', 'H6_Facial Coverings']]

#Rename the columns so they are single characters 
df=df.rename(columns={'CountryName':'Country', 'C5_Close public transport': 'Transport','C8_International travel controls' : 'International', 'H6_Facial Coverings': 'Masks'})
#Export the dicitonary into a json file
df.to_json('data.json',orient='records')