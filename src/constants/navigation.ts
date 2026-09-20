export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  {
    label: "Diseases",
    href: "/diseases",
  },
  {
    label: "Symptoms",
    href: "/symptoms",
  },
  {
    label: "Medicines",
    href: "/medicines",
  },
  {
    label: "Doctors",
    href: "/doctors",
  },
  {
    label: "Hospitals",
    href: "/hospitals",
  },
];
