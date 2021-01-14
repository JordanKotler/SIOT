# SIOT

## Data Collection

- **python_scripts** is a folder with all the scripts that were run on the Raspberry Pi for data collection:
    - sampling.py is the main script which when run, calls *sensing.py*, *gsheets.py*, *crypto.py* and *failsafe.py*
    - The password for the email address in failsafe.py has been *removed*. Please enter your own gmail address and password credentials
    
## Data analysis
 -  **data_analysis** contains the Jupyter notebook and data from Google sheets in CSV format
 
 
## Front end web application

- The output dataframe from the Jupyter notebook was saved as a CSV to be parsed into Javascript in JSON format
- *create-graph.js* contains the Javascript for the graph functions using CS.js and Papaparse
- *index.html* contains the html for the website, to organise text and plots
    
 
 
 


    
