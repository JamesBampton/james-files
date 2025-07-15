# Put these  three into requirements.txt and use that
import requests
import file_utils
import json

def main():
    while True:
        country_name = input("Enter a country name: ").strip()
        if country_name:
            url = f"https://restcountries.com/v3.1/name/{country_name}"

            # Fetch country details from the REST Countries API
            res = requests.get(url)
                        
            data = res.json() # converts JSON response to a Python dictionary or list (using imporet requests)
            #print(data)
            
            # Check if the response status code is 200
            if res.status_code == 200:
            # If the response status code is 200, get the first matching country result
                first_country = data[0]
                
                
            #######################  
                with open("sample.json", "w") as f:  
                    file_utils.write_file(first_country, f) # test writting to json file
            #######################
                with open("json_dump.txt", "w") as f: # Open a new file to write data to can place anywhere on file system
                    json.dump(first_country, f, indent=4) # Use json.dump to dump the list into the file in json format
             ######################       
                    
                
            # Get the common name and population of the country
            common = first_country["name"]["common"] # Print the country name
            capital = first_country.get("capital", ["unknown"])[0]
            population = first_country["population"] # Print the country population         
            
            print(f"The country " ,common,", has a capital named ",capital," and a population of ",population," people") 
            
            break           
        else:
            # If the response status code is not 200, print an error message
            print("Failed to get a response, please try again. Error code is {response.status_code}")

            break
    else:
        print("Invalid input. Please enter a valid country name.")

if __name__ == "__main__":
    main()
