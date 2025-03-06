import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/counter/Counter";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {path: '', element: <HomePage />},
         {path: 'activities', element: <ActivityDashboard />},
         {path: 'activities/:id', element: <ActivityDetailPage />},
         {path: 'edit/:id', element: <ActivityForm key={'create'} />},
         {path: 'createActivity', element: <ActivityForm />},
         {path: 'counter', element: <Counter />},
      ]
   }
])