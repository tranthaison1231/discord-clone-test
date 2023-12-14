import { Org } from "@/lib/type";
import { useNavigate } from "react-router-dom";

interface OrgSideBarProps {
  orgs: Org[];
}
export default function OrgSideBar({ orgs }: OrgSideBarProps) {
  const navigate = useNavigate();
  return (
    <div className="d-flex p-6 space-y-3">
      {orgs.map((org) => (
        <img
          className="w-14 h-14 rounded-full cursor-pointer"
          key={org.id}
          src={org.icon}
          alt={org.name}
          onClick={() => navigate(`/orgs/${org.id}`)}
        />
      ))}
    </div>
  );
}
