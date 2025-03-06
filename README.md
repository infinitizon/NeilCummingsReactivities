# dotnet
TO get list of options, do `dotnet new list`

__New Solution__  
- `dotnet new sln` - Creates a new solution in current folder with folder name as solution naame
- You can then add any project to the solution like so `dotnet sln add API`

__New Project__  
- `dotnet new webapi -n API -controllers` - creates a new webapi project called API and ensures the controllers folder is prepared in there

__Other project types__
- `dotnet new classlib Domain` - Creates a class library project...good for other projects when webapi is already there

__Add a Project as Reference to another Project__
- Create Soltion and Projects as stated above
- Right-clicking on API, select Add Project Reference
- Select the project you want to add as reference. E.g. Application is a reference to API

__Migrations__
`dotnet ef migrations add {migrationName} -p Persistence -s API` - -p is where our DBContext is, -s is the startup project
`dotnet ef database update -p Persistence -s API` - This looks at our migrations and applies them to our db

# React
`npm create vite@latest`

__Local Certificates__  
- `npm i -D vite-plugin-mkcert` - Uses the github mkcert repo to create a local certificate on your machine for https
- Then go to your vite.config and add the `import mkcert from 'vite-plugin-mkcert'`

__Using Typescript Types__
- Create a file `index.d.ts` in a folder called types in a lib folder like so  
`src -> lib -> types -> index.d.ts`
- In the file, create your types (similar to interfaces) like so
```typescript
type Activity = {
   id: string;
   title: string;
   date: string;
}
```
- Now you can use the types in your .tsx file like so
```typescript
const [activities, setActivities] = useState<Activity[]>([]);
```

__React Query__  
Best for managing state asynchronously. It knows when server changes and udpates accordingly
- `npm i @tanstack/react-query` [source](https://tanstack.com/query/v5/docs/framework/react/devtools)
- We may want to use the react query dev tools also `npm i @tanstack/react-query-devtools`

__React Router__  
`npm i react-router`

__MobX__  
`npm i mobx mobx-react-lite` - mobx-react-lite helps with using observers