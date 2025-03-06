import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsinfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

export default function ActivityDetailPage() {
   // const navigate = useNavigate();
   const { id } = useParams();
   const { activity, isLoadingActivity } = useActivities(id);
   if(!activity || isLoadingActivity) return <Typography>Loading...</Typography>

   return (
      <Grid2 container spacing={3}>
         <Grid2 size={8}>
            <ActivityDetailsHeader activity={activity} />
            <ActivityDetailsinfo activity={activity} />
            <ActivityDetailsChat />
         </Grid2>
         <Grid2 size={4}>
            <ActivityDetailsSidebar />
         </Grid2>
      </Grid2>
   )
}