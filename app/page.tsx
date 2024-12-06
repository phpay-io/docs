import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import GetStarted from "../components/get-started";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/phpay-io"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Siga o PHPay no Github {" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl text-indigo-600">
        Uma interface única e vários gateways de pagamento.
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground ">
        Uma interface de integração de pagamento para vários gateways de pagamento, com suporte aos principais gateways brasileiros.
      </p>
      <div className="flex flex-row items-center gap-5">
        <GetStarted />
      </div>
    </div>
  );
}
