### Steps to Setup the Project

1. Clone Repo
2. Run `npm install`
3. Create the `.env` file
4. Run `npm run dev` to start the server 🚀

### Query to Create the Patients Table

```sql
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER,
  gender VARCHAR(10),
  disease TEXT,
  admitted_on DATE DEFAULT CURRENT_DATE
);
```
