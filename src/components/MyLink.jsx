"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  // Normalize both to ensure leading slash
  const normalizedHref = href.startsWith("/") ? href : `/${href}`;
  const isActive = pathname === normalizedHref;

  return (
    <Link
      href={normalizedHref}
      onClick={onClick}
      className={`pb-2 font-semibold ${isActive ? "border-b-2 border-blue-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;