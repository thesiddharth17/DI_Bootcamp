# opening the file in read mode
sowpods = open("sowpods.txt", "r")
  
# reading the file
data = sowpods.read()
  
# replacing end of line('/n') with ' ' and
# splitting the text it further when '.' is seen.
data_into_list = data.replace('\n', ' ').split(".")
  
# printing the data
print(data_into_list)
sowpods.close() 
