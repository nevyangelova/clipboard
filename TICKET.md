# Brief

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

1. Data is saved in the database in the Facilities, Agents, and Shifts tables
2. A function getShiftsByFacility is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
3. A function generateReport is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

# Breakdown

## Ticket 1: Update Agent Model to Include Custom ID

### Description:
As a first step we need to update the Agent model to include a field for saving custom IDs set by Facilities. This custom ID will be used when generating reports for Facilities.

### Acceptance Criteria:
The Agent model should have a new field named custom_id of type string.
The custom_id field should have proper validations to ensure uniqueness within a Facility.

Time Estimate: 1 hour

### Implementation Details:
Update the Agent model to include the custom_id field.
Run the migration to update the database schema.
Update any relevant views or forms to display and allow editing of the custom_id field.

## Ticket 2: Update Shifts Report Generation to Use Custom Agent ID

### Description:
Secondly we need to modify the report generation functionality to use the custom ID set by Facilities for each Agent.

### Acceptance Criteria:
Modify the generateReport function to fetch the custom IDs of Agents instead of their internal database IDs.
Update the report generation code to use the custom IDs when generating the reports.

Time Estimate: 2-4 hours (depending on the size of the codebase)

### Implementation Details:
Update the generateReport function to accept the Facility ID as a parameter in addition to the list of Shifts.
Modify the getShiftsByFacility function to also retrieve the custom IDs of Agents assigned to the Shifts.
Update the report generation code to use the custom IDs when generating the reports.
Test the report generation functionality.

## Ticket 3: Add Custom ID Input Field in Facility Interface

### Description:
To enable Facilities to save their own custom IDs for Agents, we need to add an input field in the Facility interface where they can enter and save the custom ID for each Agent.

### Acceptance Criteria:
Add a new input field "Custom ID" in the Facility interface for managing Agents.
The input field should be associated with the custom_id attribute of the Agent model.
Facilities should be able to enter and save custom IDs for each Agent they work with.

Time Estimate: 1 hours

### Implementation Details:
Update the Facility interface view/template to include the "Custom ID" input field for each Agent.
Handle the saving of custom IDs for Agents.
Implement the necessary validations and error handling for the custom ID input field.
Test the functionality.

## Ticket 4: Validation

### Description:
To ensure the uniqueness of custom IDs within a Facility, we need to implement validation to prevent Facilities from assigning the same custom ID to multiple Agents.

### Acceptance Criteria:
Add validation to the Agent model to check for uniqueness of custom IDs within a Facility.
Display appropriate error messages in the Facility interface when a duplicate custom ID is entered.

Time Estimate: 2 hours

### Implementation Details:
Update the Agent model to validate the uniqueness of custom IDs within a Facility.
Modify the Facility interface to display error messages when a duplicate custom ID is entered.
Test the validation by attempting to save or update Agents with duplicate custom IDs.
