API Documentation 
________________________________________
Base URL
http://localhost:8081
________________________________________
POST /postFile
Creates (simulates) a new file.
Request
•	Method: POST
•	URL: /postFile
Response
•	Status: 201 Created
{
  "body": {
    "filename": "picture1.png",
    "status": "not uploaded"
  }
}
Description
Simulates uploading/creating a file. The response is hardcoded and not persistently stored.
________________________________________
GET /getFiles
Retrieves files.
Request
•	Method: GET
•	URL: /getFiles
Response
•	Status: 200 OK
Description
Returns a router reference. This is not standard REST practice but is used here as a simplified approach in a REST-ish context.
________________________________________
PUT /changeFiles
Updates a file or file status.
Request
•	Method: PUT
•	URL: /changeFiles
Response
•	Status: 200 OK
Changed the file or the status
Description
Simulates updating a file or its status. No actual data persistence or validation is performed.
________________________________________
DELETE /deleteFiles
Deletes a file.
Request
•	Method: DELETE
•	URL: /deleteFiles
Response
•	Status: 200 OK
Successfully deleted
Description
Simulates deletion of a file resource.
________________________________________
Settings API
The application also contains a separate endpoint for application settings. But this is not important in the beginning.
Base path
/settings
________________________________________
Status Codes Used
Status Code	Meaning
200	OK – The request was successful
201	Created – Resource was created
________________________________________
________________________________________
Possible Improvements
•	Consolidate endpoints under /files
•	Introduce resource IDs (/files/:id)
________________________________________

