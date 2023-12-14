import { useParams } from "@/router";
import React from "react";

export default function Channel() {
  const { channelID } = useParams("/orgs/:orgID/channels/:channelID");

  return <div>{channelID}</div>;
}
