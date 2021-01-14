# SIOT

## Part 1: Data Collection (Sensing)

- **python_scripts** is a folder with all the scripts that were run on the Raspberry Pi for data collection:
    - sampling.py is the main script which when run, calls *sensing.py*, *gsheets.py*, *crypto.py* and *failsafe.py*
    - The password for the email address in failsafe.py has been *removed* for security reasons. Please enter your own gmail address and password credentials
    - MQ4duino.ino is the script used to collected MQ4 sensor values
    

 
## Part 2: Internet of things (Front end web application)

Please visit the GitHub pages site which is hosting the web application at this link: https://jordankotler.github.io/SIOT/

### Data analysis and web app
 -  **data_analysis** contains the Jupyter notebook and data from Google sheets in CSV format
 - The output dataframe from the Jupyter notebook was saved as a CSV to be parsed into Javascript in JSON format
 - *create-graph.js* contains the Javascript for the graph functions using CS.js and Papaparse
 -  *index.html* contains the html for the website, to organise text and plots
 - For a more indepth explanation of the webapp please visit https://github.com/JordanKotler/SIOT/tree/main/docs
 
 
 


    
