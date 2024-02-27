"use client";


import Link from "next/link";
import React from "react";
import {
  BadgeAlert,
  Briefcase,
  Calendar,
  Home,
  Inbox,
  LucideIcon,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useSession } from "next-auth/react";

interface IDashProps {
  Icon: LucideIcon;
  className?: string;
  size?: number;
}

const DashIcon: React.FC<IDashProps> = ({
  Icon,
  className = "",
  size,
  ...props
}) => {
  return <Icon className={className} size={size} {...props} />;
};



const SidebarMenuItems: React.FC = () => {
  const pathname = usePathname();
  const session = useSession();
  

  const sidebarMenu = [
    {
      groupName: "Dashboard",
      items: [
        { name: "Overview", url: "overview", icon: Home },
      ],
    },
    {
      groupName: "Users",
      items: [
        { name: "Company List", url: "com-list", icon: Settings },
        { name: "Organization List", url: "org-list", icon: Settings },
      ],
    },
    {
      groupName: "Transactions",
      items: [
        { name: "Transaction History", url: "history-list", icon: Settings },
        { name: "Reports", url: "report-list", icon: Settings },
      ],
    }
  ];

  return (
    <div className="h-[calc(100vh-162px)] px-4 border-1.5 border-black">
      <ul className="flex flex-col gap-4 ">
        {sidebarMenu.map((group, index) => (
          <li key={index} className="w-full ">
            <div className="">
              <p className="mb-4 text-sm font-semibold ">{group.groupName}</p>
              <div className="flex flex-col gap-4">
                {group.items.map((item, index2) => (
                  <Link
                    href={`/dashboard/admin-dashboard/${item.url as string}`}
                    key={index2 + 1}
                    className={cn(
                      buttonVariants({
                        variant: pathname.includes(item.url as string)
                          ? "default"
                          : "ghost",
                      }),
                      "flex flex-row justify-between rounded-md    p-2 px-4 transition-colors  "
                    )}
                  >
                    <div className="flex items-center gap-2 ">
                      <DashIcon Icon={item.icon} size={20} />
                      <p>{item?.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenuItems;
