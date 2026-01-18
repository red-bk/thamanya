import { memo } from "react";
import { SidebarProps } from "./types";
import { RiArrowLeftSLine } from "@remixicon/react";
import Link from "next/link";
import AppIcon from "../app-global-icon/app-global-icon";
import { navigationItems } from "./data";

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden "
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`border-r  border-white-25 fixed left-0 top-0 z-50 h-full w-[14.0625rem] transform  shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between px-5 ">
          <a aria-label="Podbay" className=" pt-5" href="/">
            <AppIcon />
          </a>

          <button
            onClick={onToggle}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
          >
            <RiArrowLeftSLine className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 ">
          <ul className="">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm flex items-center font-medium rounded-lg px-[15px] pt-2.5  
                    ${item.children.length > 0 ? "text-[hsl(240,3%,65%)] font-bold-arabic text-[12px] uppercase" : "pb-2.5  transition-colors hover:bg-gray-100 hover:text-gray-900"}
                    `}
                  >
                    {Icon && <Icon className="mr-3 h-5 w-5" />}
                    {item.name}
                  </a>

                  {/* Render children safely */}
                  {item.children.length > 0 && (
                    <div className="flex flex-col">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className={`text-sm flex items-center font-medium rounded-lg px-[15px] py-2.5 transition-colors hover:bg-gray-100 hover:text-gray-900 `}
                        >
                          {child.icon && (
                            <child.icon className="mr-3 h-5 w-5" />
                          )}

                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 0 p-4 text-white-25 text-[12px]">
          <p className="">{"Podbay v2.9.6 by Fancy Soups."}</p>
          <div className="flex gap-3">
            <Link href="/">{"About"}</Link>
            <Link href="/">{"All Podcasts"}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Sidebar);
