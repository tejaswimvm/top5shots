"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className=" md:ml-12 my-6 text-sm font-medium text-gray-600">
      <ol className="flex items-center flex-wrap space-x-2">
        <li>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-gray-900 capitalize tracking-wide">
                  {decodeURIComponent(segment.replace(/-/g, " "))}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-blue-600 capitalize hover:text-blue-800 transition-colors duration-200"
                >
                  {decodeURIComponent(segment.replace(/-/g, " "))}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
