import { useParams } from "@/router";


export default function Channel() {
  const { channelID } = useParams("/orgs/:orgID/channels/:channelID");

  return <div>{channelID}</div>;
}
