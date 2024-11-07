import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const roleIndex = roles.indexOf(role);
  const activityIndex = activities.indexOf(activity);
  return roleIndex >= activityIndex;
};
export default useIsVerified;
