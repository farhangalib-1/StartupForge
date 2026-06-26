import { getOpportunity } from "@/lib/actions/GetData";
import OpportunityDetails from "@/components/OpportunityDetails";

export default async function OpportunityPage({ params }) {
    const {id} = await params
  const opportunity = await getOpportunity(id);

  return <OpportunityDetails opportunity={opportunity} />;
}