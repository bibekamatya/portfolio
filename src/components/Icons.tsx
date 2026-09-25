import {
  faCss3Alt,
  faJs,
  faGitAlt,
  faBootstrap,
  faNodeJs,
  faLinkedinIn,
  faGitlab,
  faReact,
  faHtml5,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faCalendarAlt,
  faClock,
  faCogs,
  faEnvelope,
  faGraduationCap,
  faLightbulb,
  faMobileRetro,
  faNetworkWired,
  faPalette,
  faPeopleArrows,
  faSchool,
  faTerminal,
  faToolbox,
  faUniversity,
  faDownload,
  faFileArrowDown,
  faComputer,
  faMoon,
  faSun,
  faAngleDoubleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconProps } from "../interfaces";

import { ReactComponent as MuiIcon } from "../assets/icon-materialui.svg";
import { ReactComponent as TailwindIcon } from "../assets/icon-tailwindcss.svg";
import { ReactComponent as AntdIcon } from "../assets/icon-ant-design.svg";
import { ReactComponent as PostmanIcon } from "../assets/icon-postman.svg";
import { ReactComponent as GraphqlIcon } from "../assets/icon-graphql.svg";
import { ReactComponent as VercelIcon } from "../assets/icon-vercel.svg";
import { ReactComponent as JestIcon } from "../assets/icon-jest.svg";
import { ReactComponent as EslintIcon } from "../assets/icon-eslint.svg";
import { ReactComponent as TsIcon } from "../assets/icon-ts.svg";
import { ReactComponent as ReduxIcon } from "../assets/icon-redux.svg";

const iconMap = {
  fileDownload: faFileArrowDown,
  download: faDownload,
  github: faGithub,
  gitlab: faGitlab,
  linkedIn: faLinkedinIn,
  react: faReact,
  html: faHtml5,
  css: faCss3Alt,
  js: faJs,
  git: faGitAlt,
  bootstrap: faBootstrap,
  nodejs: faNodeJs,
  palette: faPalette,
  toolbox: faToolbox,
  networking: faNetworkWired,
  bulb: faLightbulb,
  peopleArrow: faPeopleArrows,
  clock: faClock,
  code: faTerminal,
  setting: faCogs,
  computer: faComputer,
  calendar: faCalendarAlt,
  graduationCap: faGraduationCap,
  school: faSchool,
  university: faUniversity,
  address: faAddressCard,
  phone: faMobileRetro,
  email: faEnvelope,
  sun: faSun,
  moon: faMoon,
  mui: MuiIcon,
  tailwind: TailwindIcon,
  antd: AntdIcon,
  postman: PostmanIcon,
  graphql: GraphqlIcon,
  vercel: VercelIcon,
  jest: JestIcon,
  eslint: EslintIcon,
  ts: TsIcon,
  redux: ReduxIcon,
  arrowRight: faAngleDoubleRight,
  close: faXmark,
};

export default function Icon({ icon, className = "" }: IconProps) {
  const iconToRender: unknown = iconMap[icon as keyof typeof iconMap];

  // Check if the icon is a FontAwesome icon
  if (
    iconToRender &&
    typeof iconToRender === "object" &&
    "icon" in (iconToRender as Record<string, unknown>)
  ) {
    return (
      <FontAwesomeIcon icon={iconToRender as IconProp} className={className} />
    );
  }

  // Check if the icon is an SVG component
  if (typeof iconToRender === "function") {
    const SvgComponent = iconToRender as React.FunctionComponent<
      React.SVGProps<SVGSVGElement>
    >;
    return <SvgComponent className={className} />;
  }

  // Return null if the icon is not found
  return null;
}
