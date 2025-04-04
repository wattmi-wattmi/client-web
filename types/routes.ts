import Routes from "@/constants/routes";

type T_Route = (typeof Routes)[keyof typeof Routes];

export default T_Route;