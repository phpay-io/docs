import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-10 w-3/4 m-auto sm:p-3 max-w-[1530px] mx-auto">
      <Leftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
